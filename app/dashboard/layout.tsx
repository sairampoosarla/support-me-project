"use client";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import MainMenu from "./components/main-menu"
import MenueTitle from "./components/menu-title";
import { MenuIcon } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";

//here are defining the layout for all the dashboard related pages
export default function DashboardLayout({children}: {children: React.ReactNode}) {

    const isDesktop = useMediaQuery("(min-width: 768px)");
    return (
        //The grid configuration here will be two columns on medium and larger screens
        <div className="grid md:grid-cols-[250px_1fr] h-screen">
            {/* Main Menu Component is added here and it would be shown only on screens larger than medium */}
            <MainMenu className="hidden md:flex"/>
            {/* Mobile Menu - shown only on small screens */}
            {!isDesktop && (
                <div className="flex justify-between md:hidden sticky top-0 left-0 bg-background border-b border-b-zinc-300 p-4">
                < MenueTitle />
                <Drawer>
                    <DrawerTrigger>
                        {/* Menu Icon from lucide-react library is used here */}
                        <MenuIcon />
                    </DrawerTrigger>
                    <DrawerContent>
                        {/* Main Menu Component is reused here for mobile menu */}
                        <MainMenu />
                    </DrawerContent>
                </Drawer>
            </div>)}
            
            <div className="overflow-auto py-2 px-4">
                <h1 className="pb-4">Welcome back, Tom!</h1>
                {children}
            </div>
        </div>
    );
}