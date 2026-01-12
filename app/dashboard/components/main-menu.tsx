import MenuItem from "./menu-item";
import MenueTitle from "./menu-title";

export default function MainMenu() {
    return (
        <div className="bg-muted overflow-auto p-4">
            {/* Menu Title Component is added here */}
            <div className="border-b pb-4 border-b-zinc-300">
                <MenueTitle />
            </div>
            {/* Each Menu Items are added here */}
            <div className="py-4">
                <MenuItem href="/dashboard">Dashboard</MenuItem>
                <MenuItem href="/dashboard/teams">Teams</MenuItem>
                <MenuItem href="/dashboard/employees">Employees</MenuItem>
                <MenuItem href="/dashboard/account">Account</MenuItem>
                <MenuItem href="/dashboard/settings">Settings</MenuItem>
            </div>
        </div>
    )
}