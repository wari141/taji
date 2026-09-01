import LoginForm from "./LoginForm";

export default async function Login() {
   
    return (
        <div 
        className="flex min-h-screen items-center justify-center bg-[#0D1511] px-4 sm:px-6 lg:px-12"
        >
           
           <div className="w-full max-w-xl lg:w-1/2">
           <p className="text-sm mb-6 font-semibold uppercase tracking-[0.3em] text-[#8FAF96]">
            Taji Curls Beauty & spa
           </p>
           <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
            Welcome to Taji Curls ,
            <br />
            Beauty starts here 
           </h1>
           <p className="mt-6 max-w-md text-lg leading-relaxed text-[#A8B5AC]">
            Discover your style, express your beauty, and let 
            Taji Curls take care of the rest.
           </p>
           </div>
            <LoginForm />
            </div>
        
    );
}