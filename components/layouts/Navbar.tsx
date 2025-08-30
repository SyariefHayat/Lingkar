import Link from "next/link";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
    return (
        <nav className="font-poppins flex items-center justify-between px-8 py-4 md:py-6">
            <Link href="/">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide text-gray-900">
                    Lingkar
                </h1>
            </Link>
            <Link href="/signup" className="group space-y-1 hidden sm:block">
                <div className="relative w-fit">
                    <p className="text-xs md:text-sm font-semibold tracking-wide">
                        SIAP MENGUBAH SAMPAH
                    </p>
                    <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
                </div>

                <div className="relative w-fit">
                    <p className="text-xs md:text-sm font-semibold tracking-wide">
                        MENJADI SESUATU YANG BERNILAI ?
                    </p>
                    <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
                </div>
            </Link>

            <Sheet>
                <SheetTrigger>
                    <div className="relative w-fit group">
                        <p className="text-sm md:text-base font-semibold cursor-pointer tracking-wide">
                            Menu
                        </p>
                        <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
                    </div>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className="text-lg font-bold">Are you absolutely sure?</SheetTitle>
                        <SheetDescription className="text-sm leading-relaxed text-gray-600">
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </nav>
    )
}