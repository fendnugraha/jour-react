import Link from "next/link";

const NavLink = ({ active = false, children, isOpen, ...props }) => (
    <Link
        {...props}
        className={`flex items-center hover:bg-yellow-300 hover:text-slate-700 hover:border-r-8 border-orange-300 ${
            active ? "bg-yellow-300 text-slate-700 border-r-8" : ""
        } transition-all duration-300 origin-left`}
    >
        {children}
    </Link>
);

export default NavLink;
