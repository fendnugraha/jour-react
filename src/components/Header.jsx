import { PlusCircleIcon } from "@heroicons/react/24/solid";

const Header = ({ title }) => {
    return (
        <>
            <div className="h-[72px] px-6 mb-4 flex justify-between bg-white items-center">
                <h1 className="text-xl font-bold">{title}</h1>
                <button className="">
                    <PlusCircleIcon className="w-6 h-6 inline" /> New order
                </button>
            </div>
        </>
    );
};

export default Header;
