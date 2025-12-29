import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";


export default function LoginPage() {
    return (
        <>
            <Card className="w-full max-w-sm">
                <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Login to your SupportMe account</CardDescription>
            </CardHeader>
            <CardContent>login Form</CardContent>
            <CardFooter className="justify-around">
                <p>Don&lsquo;t have account</p>
                <Button asChild variant="outline" size="sm">
                    <Link href="/sign-up">Sign Up</Link>
                </Button>
            </CardFooter>
            </Card>
        </>
    )
}