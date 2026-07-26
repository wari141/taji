'use server'

import crypto from "crypto"
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { AuthError } from "next-auth";
import { signIn } from "@/lib/auth";
import {redirect} from "next/navigation";
import {signOut} from  "@/lib/auth"  ;
import { resend } from "@/lib/resend";
import { error } from "console";

export async function registerUser(formData:FormData){
    const surname = formData.get("surname")?.toString().trim();
    const  names = formData.get("names")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString().trim();
    const confirmpassword = formData.get("confirm password")?.toString().trim();
    
    if (!surname || !names || !email || !password || !confirmpassword) {
       
        return;
    }
    
    if (password.length <8){
       
        return;
    }
    if ( password !==confirmpassword){
       
        return;
    }
     const existingUser = await prisma.user.findUnique({
        where:{
            email,
        },
    });
    if (existingUser){
       
        return
    }
        const hashedPassword = await bcrypt.hash(password, 10);
        

        await prisma.user.create({
            data :{
        surname,
        names,
        email,
        password:hashedPassword,
            }
        })
      

    redirect("/login");
    
   
}

export async function loginUser(
    prevState: {error: string} |undefined,
    formData:FormData) {
    
    
    try {
        await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirectTo: "/dashboard"

        }
        );
        
    } catch(error){
        if (error instanceof AuthError) {
            switch(error.type){
                case "CredentialsSignin":
                    return{error: "Invalid email or password"};
                    default:
                        return {error:"something went wrong"};
            }
        }
        throw error;
    }
}
export async function logoutUser() {
    await signOut({
        redirectTo: "/login"
    })
}

export async function forgotPassword(
    previousState: {message: string; error:string},
    formData:FormData){
    const email = formData.get("email")?.toString().trim()

    if(!email) {
        return{
            message: "reset link sent",
            error: "Please enter your email address."
        };
    }
   

    const user = await prisma.user.findUnique({
        where:{
            email,
        },
    });

    if (!user) {
        return{
            message:
            "If an account exist with this email, a password reset link  has been sent.",
            error:"",
        };
    }

    const token = crypto.randomBytes(32).toString("hex");

    const expiresAt = new Date(Date.now() + 1000*60*5);

    await prisma.passwordResetToken.create({
        data:{
            email,
            token,
            expiresAt,
        },
    });
   const resetLink = `http://localhost:3000/reset-password?token=${token}`

   await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "reset your password",
    html:`
    <h2> Password Reset</h2>

    <p>You requested to resent your password. </p>

    <p>
    <a href= "${resetLink}">
    Click here to rest your password</a>
    </p>
    `,
   });
   return {
    message:
    "if an account exis  with this email , a password  reset link  has been sent .",
    error: "",
   }
}

export async function resetPassword(
    prevState: {error: string} | undefined,
    formData: FormData
) {
    const token  = formData.get("token")?.toString();
    const password =formData.get("password")?.toString();
    const confirmPassword = formData.get("confirmPassword")?.toString();

    if (!token || !password || !confirmPassword){
        return {
            error: "All fields are required",
        };
    }
    if (password.length < 8) {
        return {
            error: "Password must be at least 8 characters ",
        }
    }
    if (password  !==  confirmPassword){
        return{
            error: "password do not much"
        }
    }
     
    const resetToken = await prisma.passwordResetToken.findUnique({
        where : {
            token,
        }
    });

    if (!resetToken) {
        return {
            error: "invalid  or expired reset link",
        };
    }

    if (resetToken.expiresAt < new Date()) {
        await prisma.passwordResetToken.delete({
            where: {
                token,
            }
        })
        return {
            error: "Invalid or expired reset link"
        }
    }
    const user = await prisma.user.findUnique({
        where: {
            email:resetToken.email,
        }
    })
     if (!user) {
        return {
            error: "User not found"
        }
     }
     const hashedPassword = await bcrypt.hash(password, 10);

     await prisma.$transaction([
        prisma.user.update({
            where: {
                id: user .id,
            },
            data: {
                password : hashedPassword
            }
        }),
        prisma.passwordResetToken.delete({
            where: {
                token,
            }
        })
     ])
     redirect ("/login")

}