import Link from "next/link";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Button } from "../ui/button";
import EachUtils from "@/utils/EachUtils";
import { LIST_NAVBAR } from "@/constants/listNavbar";

export function Navbar() {
    return (
        <header className="w-full fixed top-0 left-0 bg-white/80 backdrop-blur-md py-4 px-4 sm:px-8 z-50">
            <nav className="flex items-center justify-between border-y border-gray-300 py-2">
                <h1 className="text-lg font-bold text-gray-800">EcoConnect</h1>

                <NavigationMenu viewport={false}>
                    <NavigationMenuList className="hidden md:flex">
                        <EachUtils 
                            of={LIST_NAVBAR}
                            render={(item, index) => (
                                <NavigationMenuItem key={index}>
                                    {item.url ? (
                                        <NavigationMenuLink 
                                            asChild 
                                            className={navigationMenuTriggerStyle()}
                                        >
                                            <Link href={item.url}>{item.title}</Link>
                                        </NavigationMenuLink>
                                    ) : (
                                        <>
                                            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid w-[200px] gap-2 p-3">
                                                    <EachUtils 
                                                        of={item.subMenu ?? []}
                                                        render={(sub, i) => (
                                                            <li key={i}>
                                                                <NavigationMenuLink asChild>
                                                                    <Link 
                                                                        href={sub.url} 
                                                                        className="block px-2 py-1 rounded-md hover:bg-gray-100 transition"
                                                                    >
                                                                        {sub.title}
                                                                    </Link>
                                                                </NavigationMenuLink>
                                                            </li>
                                                        )}
                                                    />
                                                </ul>
                                            </NavigationMenuContent>
                                        </>
                                    )}
                                </NavigationMenuItem>
                            )}
                        />
                    </NavigationMenuList>
                </NavigationMenu>

                <Button className="px-5 rounded-full border border-gray-600 text-gray-700 bg-transparent hover:bg-green-700 hover:text-white hover:border-transparent transition">
                    Login
                </Button>
            </nav>
        </header>
    )
}