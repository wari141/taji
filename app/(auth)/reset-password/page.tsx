 import ResetPasswordForm from "./ResetpasswordForm";

 export default async function  ResetPasswordPage({
    searchParams,
 }: {searchParams: Promise<{token?: string}>;}
) {
    const {token} = await searchParams;
    return (
        <div className="flex min-h-[100svh] items-start justify-center bg-[#FFF3E8] px-4 py-8 sm:items-center sm:px-6 sm:py-10 lg:px-12">
            <ResetPasswordForm token={token}/>
        </div>
    )
}