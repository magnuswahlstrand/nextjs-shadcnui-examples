import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {Toaster} from "@/components/ui/toaster";
import {SidebarNav} from "@/components/SidebarNav";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Shadcn UI Examples',
    description: 'Examples of using shadcn/ui components in Next.js',
}

const sidebarNavItems = [
    {
        title: "Home",
        href: "/",
    },
]

const componentsNavItems = [
    {
        title: "Toasts",
        href: "/examples/toasts",
    }
]

const otherNavItems = [
    {
        title: "Web Share API",
        href: "/examples/web-share-api",
    },
    {
        title: "Detect Device Type",
        href: "/examples/detect-device-type",
    },
]


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="p-5">
            <h1 className="text-2xl font-bold tracking-tight"><Link href="/">Examples</Link></h1>
            <p className="text-muted-foreground">
                Using <Link href="https://ui.shadcn.com/">shadcn/ui</Link> components in Next.js
            </p>
            <Separator className="my-5"/>
            <div className="flex">
                <aside className="w-1/5">
                    <SidebarNav items={componentsNavItems} name="Components"/>
                    <SidebarNav items={otherNavItems} name="Other"/>
                </aside>
                <Separator orientation={"vertical"} className="bg-red-500"/>
                <div className="flex flex-col items-center w-full">
                    {children}
                </div>
            </div>
            <Toaster/>
        </div>
        </body>
        </html>
    )
}
