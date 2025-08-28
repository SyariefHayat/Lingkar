import Image from "next/image";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { Button } from "../ui/button";
import EachUtils from "@/utils/EachUtils";
import { LIST_NAVBAR } from "@/constants/listNavbar";
import Link from "next/link";

export function Navbar() {
    return (
        <nav className="w-full fixed py-8 px-6 sm:px-8 flex items-center justify-between">
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

            <Button>Login</Button>
        </nav>
    )
}