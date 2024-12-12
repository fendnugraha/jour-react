import { PlusCircleIcon } from "@heroicons/react/24/solid";

const Header = ({ title }) => {
    return (
        <>
            <div className="h-[72px] px-6 flex justify-between items-center">
                <h1 className="text-xl font-bold">{title}</h1>
                <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
                    <PlusCircleIcon className="w-6 h-6 inline" /> New order
                </button>
            </div>
        </>
    );
};

export default Header;
