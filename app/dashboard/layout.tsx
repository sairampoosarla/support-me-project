import MainMenu from "./components/main-menu"
import MenueTitle from "./components/menu-title";

//here are defining the layout for all the dashboard related pages
export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
        //The grid configuration here will be two columns on medium and larger screens
        <div className="grid md:grid-cols-[250px_1fr] h-screen">
            {/* Main Menu Component is added here and it would be shown only on screens larger than medium */}
            <MainMenu className="hidden md:flex"/>
            {/* Mobile Menu - shown only on small screens */}
            <div className="block md:hidden sticky top-0 left-0 bg-background border-b border-b-zinc-300 p-4">
                Menu
            </div>
            <div className="overflow-auto py-2 px-4">
                <h1 className="pb-4">Welcome back, Tom!</h1>
                {children}
            </div>
        </div>
    );
}