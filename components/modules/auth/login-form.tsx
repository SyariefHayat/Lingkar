"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const demoAccounts = {
        user: { email: "user@demo.com", password: "123456" },
        courier: { email: "courier@demo.com", password: "123456" },
        partner: { email: "partner@demo.com", password: "123456" },
        investor: { email: "investor@demo.com", password: "123456" },
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        const role = (Object.keys(demoAccounts) as (keyof typeof demoAccounts)[]).find(
        (r) =>
            demoAccounts[r].email === email &&
            demoAccounts[r].password === password
        )

        if (role) {
            router.push(`/dashboard/${role}`)
        } else {
            alert("Invalid email or password. Try a demo account.")
        }
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden shadow-lg rounded-2xl">
                <CardContent className="grid p-0 md:grid-cols-2">
                    <form onSubmit={handleSubmit} className="p-6 md:p-8">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">Welcome back 👋</h1>
                                <p className="text-muted-foreground">
                                Login to access your dashboard
                                </p>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="grid gap-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password">Password</Label>
                                    <a
                                        href="#"
                                        className="text-xs text-muted-foreground hover:text-primary"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <Button type="submit" className="w-full">
                                Login
                            </Button>

                            <div className="relative text-center text-sm text-muted-foreground">
                                <span className="bg-card px-2 relative z-10">
                                Or continue with
                                </span>
                                <div className="absolute inset-0 top-1/2 border-t" />
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                                <Button variant="outline" type="button">
                                 <span className="sr-only">Apple</span>
                                </Button>
                                <Button variant="outline" type="button">
                                G <span className="sr-only">Google</span>
                                </Button>
                                <Button variant="outline" type="button">
                                f <span className="sr-only">Meta</span>
                                </Button>
                            </div>

                            <div className="text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <Link href="/signup" className="underline underline-offset-4">
                                Sign up
                                </Link>
                            </div>
                        </div>
                    </form>

                    <div className="bg-muted p-6 md:p-8 flex flex-col justify-center">
                        <div className="bg-card rounded-lg p-4 shadow-sm text-sm">
                            <p className="font-medium mb-2">💡 Demo Accounts:</p>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                <li>User → <code>user@demo.com / 123456</code></li>
                                <li>Courier → <code>courier@demo.com / 123456</code></li>
                                <li>Partner → <code>partner@demo.com / 123456</code></li>
                                <li>Investor → <code>investor@demo.com / 123456</code></li>
                            </ul>
                            <p className="mt-4 text-xs text-muted-foreground">
                                Use these demo accounts to explore different dashboards.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="text-muted-foreground text-center text-xs">
                By continuing, you agree to our{" "}
                <a href="#" className="underline hover:text-primary">
                Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="underline hover:text-primary">
                Privacy Policy
                </a>
                .
            </div>
        </div>
    )
}