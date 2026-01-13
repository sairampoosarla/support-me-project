import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import MenuItem from "./menu-item";
import MenueTitle from "./menu-title";
import Link from "next/link";
import { LayoutDashboard } from "lucide-react";

export default function MainMenu() {
    return (
        //flex and flex-col are added to make the menu items stack vertically
        <div className="bg-muted overflow-auto p-4 flex flex-col">
            {/* Menu Title Component is added here */}
            <div className="border-b pb-4 border-b-zinc-300">
                <MenueTitle />
            </div>
            {/* Each Menu Items are added here */}
            <div className="grow py-4"> 
                <MenuItem href="/dashboard">Dashboard</MenuItem>                
                <MenuItem href="/dashboard/teams">Teams</MenuItem>
                <MenuItem href="/dashboard/employees">Employees</MenuItem>
                <MenuItem href="/dashboard/account">Account</MenuItem>
                <MenuItem href="/dashboard/settings">Settings</MenuItem>
            </div>
            {/* Menu Footer Component is added here */}
            {/*flex is added so that avatar and text are in same line*/}
            <div className="flex items-center gap-2 justify-between ">
                <Avatar>
                    <AvatarFallback className="bg-pink-300">TP</AvatarFallback>
                </Avatar>
                <Link href="/" className="hover:underline">Logout</Link>
            </div>
        </div>
    )
}