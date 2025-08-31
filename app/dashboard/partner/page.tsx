
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"

import { DataTable } from "@/components/modules/dashboard/userDashboard/data-table"
import { SectionCards } from "@/components/modules/dashboard/userDashboard/section-cards"
import { ChartAreaInteractive } from "@/components/modules/dashboard/userDashboard/chart-area-interactive"
import { AppSidebar } from "@/components/modules/dashboard/partnerDashboard/app-sidebar"
import { SiteHeader } from "@/components/modules/dashboard/partnerDashboard/site-header"

export default function CourierDashboard() {
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