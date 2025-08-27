"use client";
import { ArrowLeftRightIcon, ChartAreaIcon, CogIcon, DollarSignIcon, LayoutDashboardIcon, Menu, PowerIcon, ScaleIcon } from "lucide-react";
import { useState } from "react";
import NavLink from "@/app/components/NavLink";
import DarkModeToggle from "../components/DarkModeToggle";
import { usePathname } from "next/navigation";
import { navMenu } from "../config/NavMenu";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathName = usePathname();
    return (
        <>
            <nav className={`hidden sm:flex sm:flex-col ${isMenuOpen ? "w-64" : "w-16"} h-screen justify-between transition-all duration-200 ease-in`}>
                {/* Header */}
                <button className="bg-white dark:bg-slate-700 flex items-center cursor-pointer text-sky-800 dark:text-yellow-300">
                    {/* Tombol Toggle */}
                    <span
                        className="w-16 h-14 flex items-center justify-center flex-shrink-0 text-slate-700 dark:text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu size={28} />
                    </span>

                    {/* Logo Text */}
                    <div
                        className={`flex w-full justify-between items-center transition-all duration-300 origin-left ${
                            isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        }`}
                    >
                        <h1 className={`text-xl font-bold text-nowrap`}>Eightnite ID</h1>
                        <DarkModeToggle />
                    </div>
                </button>
                {/* Middle Menu */}
                <div className="flex-1">
                    <ul className="py-4">
                        {navMenu.mainMenu.map((item, index) => (
                            <li key={index}>
                                <NavLink href={item.href} active={pathName.startsWith(item.path)}>
                                    <span className="w-16 h-12 flex items-center justify-center flex-shrink-0 text-slate-500">
                                        <item.icon size={16} className="" />
                                    </span>
                                    <span
                                        className={`text-sm transition-all duration-300 origin-left ${
                                            isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                                        }`}
                                    >
                                        {item.name}
                                    </span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Footer */}
                <button className="flex items-center hover:bg-slate-200 cursor-pointer">
                    {/* Tombol Toggle */}
                    <span className="w-16 h-14 flex items-center justify-center flex-shrink-0 text-slate-700">
                        <PowerIcon size={24} />
                    </span>

                    {/* Logo Text */}
                    <h1 className={`text-sm transition-all duration-300 origin-left ${isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>Logout</h1>
                </button>
            </nav>
        </>
    );
};

export default Navigation;
