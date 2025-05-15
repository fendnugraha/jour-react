"use client";
import { ArrowLeftRightIcon, HomeIcon, LayoutDashboardIcon, Menu, PowerCircleIcon, SettingsIcon, StoreIcon } from "lucide-react";
import { useState } from "react";
import NavLink from "./components/NavLink";

const Navigation = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <nav className={`flex flex-col bg-white ${isMenuOpen ? "w-64" : "w-16"} h-screen justify-between transition-all duration-200 ease-in`}>
                {/* Header */}
                <button className="flex items-center mb-4 bg-blue-700 text-white cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {/* Tombol Toggle */}
                    <span className="w-16 h-20 flex items-center justify-center flex-shrink-0">
                        <Menu size={24} />
                    </span>

                    {/* Logo Text */}
                    <h1 className={`text-xl font-bold transition-all duration-300 origin-left ${isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                        Logo
                    </h1>
                </button>
                {/* Middle Menu */}
                <div className="flex-1">
                    <ul className="">
                        <li>
                            <NavLink href="#">
                                <span className="w-16 h-16 flex items-center justify-center flex-shrink-0 text-slate-700">
                                    <LayoutDashboardIcon size={24} />
                                </span>
                                <span className={`transition-all duration-300 origin-left ${isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                                    Dashboard
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="#">
                                <span className="w-16 h-16 flex items-center justify-center flex-shrink-0 text-slate-700">
                                    <ArrowLeftRightIcon size={24} />
                                </span>
                                <span className={`transition-all duration-300 origin-left ${isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                                    Transaction
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="#">
                                <span className="w-16 h-16 flex items-center justify-center flex-shrink-0 text-slate-700">
                                    <StoreIcon size={24} />
                                </span>
                                <span className={`transition-all duration-300 origin-left ${isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                                    Store
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="mt-4 border-t border-slate-300">
                        <li>
                            <NavLink href="#">
                                <span className="w-16 h-16 flex items-center justify-center flex-shrink-0 text-slate-700">
                                    <SettingsIcon size={24} />
                                </span>
                                <span className={`transition-all duration-300 origin-left ${isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                                    Setting
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Footer */}
                <button className="flex items-center hover:bg-slate-100 cursor-pointer">
                    {/* Tombol Toggle */}
                    <span className="w-16 h-16 flex items-center justify-center flex-shrink-0 text-slate-700">
                        <PowerCircleIcon size={24} />
                    </span>

                    {/* Logo Text */}
                    <h1 className={`text-sm transition-all duration-300 origin-left ${isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>Logout</h1>
                </button>
            </nav>
            <div className="flex-1">
                <header className="w-full h-20 flex items-center justify-between px-4 py-2 bg-white">
                    <h1 className="text-2xl font-bold text-blue-700">Dashboard</h1>
                </header>
                <main className="p-4">{children}</main>
            </div>
        </>
    );
};

export default Navigation;
