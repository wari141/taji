import LoginForm from "./LoginForm";

export default async function Login() {

    return (
        <div
            className="flex min-h-[100svh] flex-col items-center justify-center gap-8 bg-[#FFF3E8] px-4 py-8 sm:px-6 lg:flex-row lg:gap-12 lg:px-12"
        >

            <div className="w-full max-w-xl">
                <p className="text-sm mb-6 font-semibold uppercase tracking-[0.3em] text-[#E87522]">
                    Taji Curls Beauty & spa
                </p>
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                    Welcome to Taji Curls ,
                    <br className="hidden sm:block"/>
                    Beauty starts here
                </h1>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-[#6D5546]">
                    Discover your style, express your beauty, and let
                    Taji Curls take care of the rest.
                </p>
            </div>
            <LoginForm/>
        </div>

    );
}