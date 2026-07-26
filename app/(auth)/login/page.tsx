import LoginForm from "./LoginForm";

export default async function Login() {
   
    return (
        <div className="flex min-h-screen items-center justify-center  bg-gradient-to-tl from-purple-700 via-purple-900  to-violet-600 p-6 ">
        <div className="w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl min-h-screen items-center justify-center">
            <LoginForm />
        </div>
        </div>
    );
}