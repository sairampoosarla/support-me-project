import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserIcon } from "lucide-react";
import Link from "next/link";

export default function Employeestats() {
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
                <CardTitle className="text-base">Total Employees</CardTitle>
                </CardHeader>
            </Card>
            <Card className="border-pink-500">
                <CardHeader>
                <CardTitle className="text-base">Total Employees</CardTitle>
                </CardHeader>
            </Card>
        </div>
    );
}