import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LaptopIcon, PartyPopperIcon, ShieldAlert, ShieldCheck, Star, StarIcon, TicketIcon, TriangleAlert, UserIcon, UserRoundCheck, UserRoundX, Users } from "lucide-react";
import Link from "next/link";
import TeamDistribution from "./team-distribution";


export default function TeamStats() {
    return (
        <>
        <div className="grid lg:grid-cols-3 gap-4">
            <Card>
                <CardHeader>
                <CardTitle className="text-base">Total teams</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-between items-center gap-4">
                    <div className="flex gap-2">
                    <Users />
                    <p className="text-5xl font-bold">8</p>
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
                <CardHeader className="flex justify-between">
                <CardTitle className="text-base">Team Leaders</CardTitle>
                <StarIcon className="text-yellow-500"/>
                </CardHeader>
                <CardContent className="flex justify-between items-center gap-4">
                    <div className="flex flex-row flex-wrap gap-2">
                        <Avatar>
                            <AvatarImage src="/image/cm.jpg"/>
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="/image/cm.jpg"/>
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="/image/cm.jpg"/>
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="/image/cm.jpg"/>
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="/image/cm.jpg"/>
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="/image/cm.jpg"/>
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="/image/cm.jpg"/>
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="/image/cm.jpg"/>
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="/image/cm.jpg"/>
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="/image/cm.jpg"/>
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="/image/cm.jpg"/>
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="/image/cm.jpg"/>
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="/image/cm.jpg"/>
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="/image/cm.jpg"/>
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="/image/cm.jpg"/>
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="/image/cm.jpg"/>
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="/image/cm.jpg"/>
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="/image/cm.jpg"/>
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="/image/cm.jpg"/>
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                    </div>
                </CardContent>
                
            </Card>
            {/*here we have added flex and flex-col to make the card take full height and align footer at bottom, along with mt-auto added to the card footer */}
            <Card className="flex flex-col">
                <CardHeader>
                <CardTitle className="text-base">Team Distribution</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                    <TeamDistribution />
                    
                </CardContent>
            </Card>
        </div>
        <div className="mt-4">
            <Card>
                <CardTitle className="text-base flex items-center gap-2 p-4">
                    <TicketIcon />
                    <span> Support Tickets </span>
                </CardTitle>
                <CardContent>
                    
                </CardContent>
            </Card>
        </div>
        </>
    )
}