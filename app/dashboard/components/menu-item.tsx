"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { use } from "react";
import { cn } from "@/lib/utils";

type Props = {
    children: React.ReactNode;
    href:string;
}

/* Here the in children any elements that are nested inside the component when it's used in JSX  */

export default function MenuItem({children, href}:Props) {

    const pathName = usePathname();
    //here we are checking if the current path is same as href passed to the component i.e., if the menu item is loaded on the page or not
    const isActive = pathName === href;
    //based on the active status we are applying different styles to the menu item so that the active menu item is highlighted
    return <Link className={isActive ? cn("block p-2 bg-primary rounded-md text-white hover:text-white hover:bg-primary") :  cn("p-2 block hover:bg-white rounded-md text-muted-foreground hover:text-foreground")}href={href}>{children}</Link>;
    
}