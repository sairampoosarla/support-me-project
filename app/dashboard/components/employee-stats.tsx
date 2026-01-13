import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PartyPopperIcon, ShieldAlert, ShieldCheck, TriangleAlert, UserIcon, UserRoundCheck, UserRoundX } from "lucide-react";
import Link from "next/link";

export default function Employeestats() {

    const TotalEmployees = 100
    const presentEmployees = 90;
    const percentagePresent = (presentEmployees / TotalEmployees) * 100;

    return (
        <div className="grid lg:grid-cols-3 gap-4">
            <Card>
                <CardHeader>
                <CardTitle className="text-base">Total Employees</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-between items-center gap-4">
                    <div className="flex gap-2">
                    <UserIcon />
                    <p className="text-5xl font-bold">10</p>
                    </div>
                    <div>
                        {/* Using Button component with 'asChild' to render a Link inside it */}
                        {/*added a custom size 'xs' for smaller button*/}
                        <Button size="xs" asChild>
                            <Link href="/dashboard/employees">View all</Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                <CardTitle className="text-base">Employee Present</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-between items-center gap-4">
                    <div className="flex gap-2">
                    {presentEmployees > 75 ? <UserRoundCheck /> : <UserRoundX />}
                    <p className="text-5xl font-bold">10</p>
                    </div>
                </CardContent>
                <CardFooter className="flex items-center gap-2">
                    <div>
                        {percentagePresent>75 ? <ShieldCheck className="text-green-500"/> : <TriangleAlert className="text-red-500"/>}
                    </div>
                    <div>
                        <p className={percentagePresent>75 ? "text-green-500" : "text-red-500"}>{percentagePresent}% employees are present today</p>
                    </div>
                </CardFooter>
            </Card>
            {/*here we have added flex and flex-col to make the card take full height and align footer at bottom, along with mt-auto added to the card footer */}
            <Card className="border-pink-500 flex flex-col">
                <CardHeader>
                <CardTitle className="text-base">Employee of the Month</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src="/image/cm.jpg"/>
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <p className="text-2xl">Colin Murray!</p>
                </CardContent>
                <CardFooter className="flex gap-2 items-center text-sx mt-auto">
                    <PartyPopperIcon className="text-pink-500"/>
                    <p>Keep up the great work!</p>
                </CardFooter>
            </Card>
        </div>
    );
}