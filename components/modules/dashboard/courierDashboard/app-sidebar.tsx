"use client"

import * as React from "react"
import { IconInnerShadowTop } from "@tabler/icons-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import { NavDocuments } from "./nav-documents"
import { NavSecondary } from "./nav-secondary"
import { LIST_COURIER_NAVBAR_DB } from "@/constants/listCourierNavbarDB"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-1.5"
                        >
                            <a href="#">
                                <IconInnerShadowTop className="!size-5" />
                                <span className="text-base font-semibold">Lingkar</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={LIST_COURIER_NAVBAR_DB.navMain} />
                <NavDocuments items={LIST_COURIER_NAVBAR_DB.documents} />
                <NavSecondary items={LIST_COURIER_NAVBAR_DB.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={LIST_COURIER_NAVBAR_DB.user} />
            </SidebarFooter>
        </Sidebar>
    )
}
