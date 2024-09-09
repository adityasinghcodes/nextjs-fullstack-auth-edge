import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import { handleSignOut } from "@/app/actions/authActions";

export default async function Navbar() {
    const session = await auth();
    console.log({ session });
    return (
        <nav className="flex justify-between items-center py-3 px-4 fixed top-0 left-0 right-0 z-50 bg-slate-100">
            <Link href="/" className="text-xl font-bold">
                Auth.js
            </Link>
            {!session ? (
                <div className="flex gap-2 justify-center">
                    <Link href="/auth/signin">
                        <Button variant="default">Sign In</Button>
                    </Link>
                    <Link href="/auth/signup">
                        <Button variant="default">Sign Up</Button>
                    </Link>
                </div>
            ) : (
                <form action={handleSignOut}>
                    <Button variant="default" type="submit">
                        Sign Out
                    </Button>
                </form>
            )}
        </nav>
    );
}
