import LoginForm from "./LoginForm";

export default async function Login() {

    return (
        <div
            className="flex min-h-[100svh] w-full flex-col items-center justify-center gap-8 bg-[#2B063F] px-4 py-8 sm:px-6 lg:flex-row lg:gap-12 lg:px-12 text-[#FDF9FF]"
        >

            <div className="w-full max-w-xl">
                <p className="text-sm mb-6 font-semibold uppercase tracking-[0.3em] text-[#D6A84F]">
                    Gee Curly Beauty & Spa
                </p>
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                    Welcome to Gee Curly Beauty & Spa ,
                    <br className="hidden sm:block"/>
                    Beauty starts here
                </h1>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-[#D8B4E5]">
                    Discover your style, express your beauty, and let
                    Gee curly take care of the rest.
                </p>
            </div>
            <LoginForm/>
        </div>

    );
}