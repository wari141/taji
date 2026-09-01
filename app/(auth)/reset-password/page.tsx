 import ResetPasswordForm from "./ResetpasswordForm";

 export default async function  ResetPasswordPage({
    searchParams,
 }: {searchParams: Promise<{token?: string}>;}
) {
    const {token} = await searchParams;
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#0D1511] px-4 sm:px-6 lg:px-12">
            <ResetPasswordForm token={token}/>
        </div>
    )
}