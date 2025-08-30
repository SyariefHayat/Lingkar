"use client"

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { 
    Accordion, 
    AccordionContent, 
    AccordionItem, 
    AccordionTrigger 
} from "../ui/accordion";

import { 
    NavigationMenu, 
    NavigationMenuContent, 
    NavigationMenuItem, 
    NavigationMenuLink, 
    NavigationMenuList, 
    NavigationMenuTrigger 
} from "../ui/navigation-menu";

import { Button } from "../ui/button";
import EachUtils from "@/utils/EachUtils";
import { Separator } from "../ui/separator";
import { LIST_NAVBAR } from "@/constants/listNavbar";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="font-poppins flex items-center justify-between px-8 py-4 md:py-6">
            <Link href="/">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide text-gray-900">
                    Lingkar
                </h1>
            </Link>

            <div className="hidden lg:flex items-center">
                <NavigationMenu viewport={false}>
                    <NavigationMenuList className="space-x-2">
                        <EachUtils
                            of={LIST_NAVBAR}
                            render={(item, index) => (
                                <NavigationMenuItem key={index}>
                                    {item.subMenu ? (
                                        <>
                                            <NavigationMenuTrigger className="h-10 px-4 py-2 text-sm font-medium">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <div className="grid w-[200px] gap-1 p-2">
                                                    {item.subMenu.map((subItem, subIndex) => (
                                                        <NavigationMenuLink key={subIndex} asChild>
                                                            <Link
                                                                href={subItem.url}
                                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-100 hover:text-accent-foreground focus:bg-green-100 focus:text-accent-foreground"
                                                            >
                                                                <div className="text-sm font-medium leading-none">
                                                                    {subItem.title}
                                                                </div>
                                                            </Link>
                                                        </NavigationMenuLink>
                                                    ))}
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <Link href={item.url}>
                                            <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-green-100 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                                {item.title}
                                            </NavigationMenuLink>
                                        </Link>
                                    )}
                                </NavigationMenuItem>
                            )}
                        />
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <Link href="/signin" className="group space-y-1 hidden lg:block">
                <Button className="bg-transparent text-black border border-black hover:text-white rounded-full cursor-pointer">Signin</Button>
            </Link>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild className="lg:hidden">
                    <Button
                        variant="ghost"
                        className="mr-2 px-0 text-base hover:bg-transparent focus-visible:ring-0 border cursor-pointer"
                    >
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>

                <SheetContent
                    side="right"
                    className="px-0 sm:max-w-xs font-poppins flex flex-col"
                >
                    <SheetHeader className="text-left">
                        <SheetTitle className="text-lg font-bold">Menu Navigasi</SheetTitle>
                        <SheetDescription className="text-sm text-muted-foreground">
                            Jelajahi semua fitur dan layanan Lingkar
                        </SheetDescription>
                    </SheetHeader>

                    <Separator className="mb-4" />

                    <div className="flex-1 flex flex-col space-y-2">
                        <EachUtils
                            of={LIST_NAVBAR}
                            render={(item, index) => (
                                <div key={index}>
                                    {item.subMenu ? (
                                        <Accordion
                                            type="single"
                                            collapsible
                                            className="w-full border-0"
                                        >
                                            <AccordionItem
                                                value={`item-${index}`}
                                                className="border-0"
                                            >
                                                <AccordionTrigger className="px-4 py-2 rounded-md hover:bg-muted text-sm font-medium">
                                                    {item.title}
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="ml-3 mt-1 flex flex-col space-y-1">
                                                        <EachUtils
                                                            of={item.subMenu}
                                                            render={(item, index) => (
                                                                <SheetClose key={index} asChild>
                                                                    <Link
                                                                        href={item.url}
                                                                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                                                                    >
                                                                        {item.title}
                                                                    </Link>
                                                                </SheetClose>
                                                            )}
                                                        />
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    ) : (
                                        <SheetClose asChild>
                                            <Link
                                                href={item.url}
                                                className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
                                            >
                                                {item.title}
                                            </Link>
                                        </SheetClose>
                                    )}
                                </div>
                            )}
                        />
                    </div>

                    <Separator className="my-6" />

                    <div className="pb-4 px-2">
                        <Button className="w-full">Login</Button>
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    )
}