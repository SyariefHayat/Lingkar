import Link from "next/link";
import Image from "next/image";

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
        <header className="w-full fixed py-8 px-6 sm:px-8 z-50">
            <nav className="flex items-center justify-between border-b-[1px] pb-4">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    priority
                />

                <NavigationMenu viewport={false}>
                    <NavigationMenuList>
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
                                                        render={(item, index) => (
                                                            <li key={index}>
                                                                <NavigationMenuLink asChild>
                                                                    <Link 
                                                                        href={item.url} 
                                                                        className="block px-2 py-1 rounded-md hover:bg-gray-100 transition"
                                                                    >
                                                                        {item.title}
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

                <Button className="px-5 bg-transparent border-black text-black hover:bg-green-800 hover:text-white hover:border-transparent border rounded-full cursor-pointer">Login</Button>
            </nav>
        </header>
    )
}