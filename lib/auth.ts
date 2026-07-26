import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
 import Credentials from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import bcrypt from "bcrypt";

 export const {handlers, signIn, signOut, auth} = NextAuth({

    adapter:PrismaAdapter(prisma),
    

    session:{
        strategy:"jwt",
    },

    providers:[
        Credentials({
            credentials:{
                email:{},
                password:{},
            },
            async authorize(credentials){
                const email = credentials.email as string;
                const password =  credentials.password as string;
                

                if (!email || !password){
                    return null;
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email,
                    },
                });
                
                if (!user) {
                     
                    return null;
                }
                const passwordMatch = await bcrypt.compare(
                    password,
                    user.password
                );
              
                if (!passwordMatch){
                    return null
                }
                return {
                    id: user.id,
                    email: user.email,
                    name: `${user.names} ${user.surname}`,
                    image: user.image,
                }
            },
        }),
    ],
    callbacks: {
  async jwt({ token, user }) {
    if (user) {
      token.sub = user.id;
    }
    return token;
  },

  async session({ session, token }) {
    if (session.user) {
      session.user.id = token.sub!;
    }
    return session;
  },
},
 });