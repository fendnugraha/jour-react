"use client";
import { ArrowLeftRightIcon, ChartAreaIcon, CirclePowerIcon, DollarSignIcon, LayoutDashboardIcon, MenuIcon, StoreIcon, XIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ResponsiveNavLink, { ResponsiveNavButton } from "@/app/components/ResponsiveNavLink";
import { usePathname } from "next/navigation";
import DarkModeToggle from "../components/DarkModeToggle";
import { navMenu } from "../config/NavMenu";

const TopBar = ({ headerTitle }) => {
    const [isOpen, setIsOpen] = useState(false);

    const pathName = usePathname();
    const drawerReff = useRef();
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (drawerReff.current && !drawerReff.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);
    return (
        <>
            <header className="w-full h-20 flex items-center justify-between px-4 sm:px-6 py-2">
                <h1 className="text-md sm:text-2xl font-bold text-slate-700 dark:text-white">
                    {headerTitle}
                    <span className="text-xs font-normal p-0 sm:block hidden">Warehouse Name</span>
                </h1>
                <div className="flex items-center justify-end sm:gap-4">
                    <button className="sm:hidden">
                        {!isOpen ? <MenuIcon size={30} onClick={() => setIsOpen(!isOpen)} /> : <XIcon size={30} onClick={() => setIsOpen(!isOpen)} />}
                    </button>
                </div>
            </header>
            <div
                ref={drawerReff}
                className={`mt-2 transform ${
                    isOpen ? "opacity-100 scale-y-100 h-auto" : "opacity-0 scale-y-0 h-0"
                } sm:hidden transition-all origin-top duration-200 ease-in`}
            >
                <div className="bg-white dark:bg-slate-700 rounded-2xl">
                    <ul className="space-y-2 py-2">
                        <li className="flex items-center justify-between px-4 py-2">
                            <div className="flex items-center gap-2">
                                <DarkModeToggle />
                                <h1 className="text-md font-bold">fend@jour.com</h1>
                            </div>
                            <span className="text-sm">Administrator</span>
                        </li>
                        {navMenu.mainMenu.map((item, index) => (
                            <li className="" key={index}>
                                <ResponsiveNavLink href={item.href} active={pathName === item.path}>
                                    <item.icon size={20} className="mr-2 inline" /> {item.name}
                                </ResponsiveNavLink>
                            </li>
                        ))}

                        <li className="border-t border-slate-300 pt-2" onClick={() => console.log("logout")}>
                            <ResponsiveNavButton>
                                <CirclePowerIcon size={20} className="mr-2 inline" /> Logout
                            </ResponsiveNavButton>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default TopBar;
