"use client"

import Link from "next/link"
import {usePathname} from "next/navigation"

import {cn} from "@/lib/utils"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    name?: string
    items: {
        href: string
        title: string
    }[]
}

// Copied from
// https://github.com/shadcn-ui/ui/blob/main/apps/www/app/examples/forms/components/sidebar-nav.tsx
// Then modified
export function SidebarNav({className, items, name, ...props}: SidebarNavProps) {
    const pathname = usePathname()

    return (
        <nav
            className={cn(
                "flex flex-col space-x-0 space-y-1",
                className
            )}
            {...props}
        >
            {name && <div className="font-bold text-md mt-4 whitespace-nowrap">{name}</div>}
            {items.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                        pathname === item.href
                            ? "text-foreground"
                            : "text-muted-foreground",
                        "justify-start hover:underline whitespace-nowrap"
                    )}
                >
                    {item.title}
                </Link>
            ))}
        </nav>
    )
}