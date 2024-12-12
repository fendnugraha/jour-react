import { ChevronDownIcon } from "@heroicons/react/16/solid";
import {
    ArrowRightEndOnRectangleIcon,
    Bars3Icon,
    ChartPieIcon,
    ShoppingBagIcon,
    Square2StackIcon,
    UserCircleIcon,
    UserGroupIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
// import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    return (
        <div className={`bg-gray-800 text-white min-h-screen transition-all ${isOpen ? "w-64" : "w-16"} flex flex-col`}>
            <div className="h-[72px] px-4 hover:bg-gray-700 flex items-center justify-start gap-4 cursor-pointer">
                <div className="h-full flex items-center" onClick={toggleNavbar}>
                    <Bars3Icon className="w-8 h-8" />
                </div>
                <div
                    className={`transition-all duration-300 ease-in-out transform text-nowrap ${
                        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                    style={{ display: isOpen ? "inline" : "none" }}
                >
                    <h1 className="font-bold">
                        <UserCircleIcon className="w-6 h-6 inline" /> fend@jour.com{" "}
                        <ChevronDownIcon className="w-4 h-4 inline" />
                    </h1>
                </div>
            </div>
            <nav className="flex-1">
                <ul className="space-y-4 mt-4 text-sm">
                    <li
                        className={`px-4 py-4 hover:bg-gray-700 cursor-pointer flex items-center gap-4 ${
                            isOpen ? "justify-start" : "justify-center"
                        }`}
                    >
                        <div className="">
                            <ChartPieIcon className="w-5 h-5" />
                        </div>
                        <span
                            className={`transition-all duration-300 ease-in-out transform text-nowrap ${
                                isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                            }`}
                            style={{ display: isOpen ? "inline" : "none" }}
                        >
                            Dashboard
                        </span>
                    </li>
                    <li
                        className={`px-4 py-4 hover:bg-gray-700 cursor-pointer flex items-center gap-4 ${
                            isOpen ? "justify-start" : "justify-center"
                        }`}
                    >
                        <div>
                            <ShoppingBagIcon className="w-5 h-5" />
                        </div>
                        <span
                            className={`transition-all duration-300 ease-in-out transform text-nowrap ${
                                isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                            }`}
                            style={{ display: isOpen ? "inline" : "none" }}
                        >
                            Order list
                        </span>
                    </li>
                    <li
                        className={`px-4 py-4 hover:bg-gray-700 cursor-pointer flex items-center gap-4 ${
                            isOpen ? "justify-start" : "justify-center"
                        }`}
                    >
                        <div>
                            <Square2StackIcon className="w-5 h-5" />
                        </div>
                        <span
                            className={`transition-all duration-300 ease-in-out transform text-nowrap ${
                                isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                            }`}
                            style={{ display: isOpen ? "inline" : "none" }}
                        >
                            Products
                        </span>
                    </li>
                    <li
                        className={`px-4 py-4 hover:bg-gray-700 cursor-pointer flex items-center gap-4 ${
                            isOpen ? "justify-start" : "justify-center"
                        }`}
                    >
                        <div>
                            <UserGroupIcon className="w-5 h-5" />
                        </div>
                        <span
                            className={`transition-all duration-300 ease-in-out transform text-nowrap ${
                                isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                            }`}
                            style={{ display: isOpen ? "inline" : "none" }}
                        >
                            Customers
                        </span>
                    </li>
                </ul>
            </nav>

            <div className="">
                <button className="px-4 py-4 w-full hover:bg-gray-700 cursor-pointer flex items-center gap-4 justify-start">
                    <div>
                        <ArrowRightEndOnRectangleIcon className="w-5 h-5" />
                    </div>
                    <span
                        className={`transition-all duration-300 ease-in-out transform text-nowrap ${
                            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        }`}
                        style={{ display: isOpen ? "inline" : "none" }}
                    >
                        Logout
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
