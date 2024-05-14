import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button";
import { CircleUser } from "lucide-react";
import Link from 'next/link';

export default function UserItem() {
    return (
        <div className="avatar flex items-center justify-center gap-2  rounded-[8px] p-2">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon" className="rounded-full">
                        <div className="avatar rounded-full min-h-12 min-w-12 bg-emerald-500 text-white font-[700]  flex items-center justify-center">
                            <p>DA</p>
                        </div>
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator /> */}
                    <Link href="/Login">
                    <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
                    </Link>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="">
                <p className="text-[16px] font-bold">David Alvarez</p>
                <p className="text-[12px] text-neutral-500">auxsistemas@atpilot.mx</p>
            </div>
        </div>
    );
}

