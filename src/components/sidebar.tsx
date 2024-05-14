import Link from 'next/link';
import UserItem from './userItem';
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { Inbox, Receipt, User, Bell, Settings, FolderKey, ScrollText } from 'lucide-react';



export default function Sidebar() {
    const menuList = [
        {
            group: "General",
            items: [
                {
                    link: "/",
                    text: "Profile",
                    icon: <User />,
                },
                {
                    link: "/",
                    text: "Inbox",
                    icon: <Inbox />,
                },
                {
                    link: "/",
                    text: "Billing",
                    icon: <Receipt />,
                },
                {
                    link: "/",
                    text: "Notifications",
                    icon: <Bell />,
                }
            ]
        },
        {
            group: "Settings",
            items: [
                {
                    link: "/",
                    text: "General Settings",
                    icon: <Settings />,
                },
                {
                    link: "/",
                    text: "Privacy",
                    icon: <FolderKey />,
                },

                {
                    link: "/",
                    text: "Logs",
                    icon: <ScrollText />,
                }
            ]
        }
    ];

    return (
        <div className="fixed w-[300px] min-w-[300px] gap-4 border-r min-h-screen p-4 flex flex-col">
            <div>
                <UserItem></UserItem>
            </div>
            <div className="grow">
                <Command style={{overflow: 'visible'}}>
                    <CommandList style={{overflow: 'visible'}}>
                        {menuList.map((menu: any, key: number) => (
                            <CommandGroup key={key} heading={menu.group}>
                                {menu.items.map((option: any, optionKey: number) =>
                                    <CommandItem key={optionKey} className='flex gap-2 cursor-pointer'>
                                        {option.icon}
                                        {option.text}
                                    </CommandItem>)}
                            </CommandGroup>
                        ))}
                    </CommandList>
                </Command>
            </div>
            <div>Settings / Notifications</div>
        </div>
    );
}