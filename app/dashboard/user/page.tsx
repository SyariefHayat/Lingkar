
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"

import data from "./data.json"
import { DataTable } from "@/components/modules/userDashboard/data-table"
import { AppSidebar } from "@/components/modules/userDashboard/app-sidebar"
import { SiteHeader } from "@/components/modules/userDashboard/site-header"
import { SectionCards } from "@/components/modules/userDashboard/section-cards"
import { ChartAreaInteractive } from "@/components/modules/userDashboard/chart-area-interactive"

export default function UserDashboard() {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <AppSidebar variant="inset" />
            <SidebarInset>
                <SiteHeader />
                {/* <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                            <SectionCards />
                            <div className="px-4 lg:px-6">
                                <ChartAreaInteractive />
                            </div>
                            <DataTable data={data} />
                        </div>
                    </div>
                </div> */}
            </SidebarInset>
        </SidebarProvider>
    )
}