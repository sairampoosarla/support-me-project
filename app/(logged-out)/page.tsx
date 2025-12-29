import { Button } from "@/components/ui/button"
import { PersonStandingIcon } from "lucide-react"
import Link from "next/link";


export default function landingPage () {
    return (
        <>
            <h1 className="flex gap-2 items-center">
                <PersonStandingIcon size={50} className="text-pink-500" />
                Support Me
                </h1>
                <p>This is the sub heading</p>
            <div className="flex gap-2 items-center">
                <Button asChild>
                    <Link href="/login">Login</Link>
                </Button>
                <small>or</small>
            <Button asChild variant="outline">
                <Link href="/signup">SignUp</Link>
                </Button>
            </div>
            
        </>
    )
}