 import ResetPasswordForm from "./ResetpasswordForm";

 export default async function  ResetPasswordPage({
    searchParams,
 }: {searchParams: Promise<{token?: string}>;}
) {
    const {token} = await searchParams;
    return (
        <div className="flex min-h-screen items-center justify-center">
            <ResetPasswordForm token={token}/>
        </div>
    )
}