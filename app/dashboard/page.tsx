import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Employeestats from "./components/employee-stats";


export default function DashboardPage() {
    return (
        //here we are creating tabs for Employees and Teams
        <Tabs>
            {/* Here we are defining the tab list with two tabs: Employees and Teams */}
            {/* Each tabTrigger needs to have a value prop which should match the corresponding TabsContent value so respective information is displayed */}
            <TabsList className="mb-4">
                <TabsTrigger value="employees">Employees</TabsTrigger>
                <TabsTrigger value="teams">Teams</TabsTrigger>
            </TabsList>
            <TabsContent value="employees">
                <Employeestats />
            </TabsContent>
            <TabsContent value="teams">
                <div>Teams content goes here.</div>
            </TabsContent>
        </Tabs>
    )
}