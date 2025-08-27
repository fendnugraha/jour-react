const Button = ({ children, buttonType = "primary", className, ...props }) => {
    const buttonTypes = {
        primary: "bg-teal-500 dark:bg-teal-600 hover:bg-teal-400 dark:hover:bg-teal-500 text-white",
        secondary: "bg-gray-500 hover:bg-gray-400 text-white",
        danger: "bg-red-500 hover:bg-red-400 text-white",
        warning: "bg-yellow-500 hover:bg-yellow-400 text-white",
        success: "bg-green-500 hover:bg-green-400 text-white",
        dark: "bg-gray-800 hover:bg-gray-700 text-white",
    };
    return (
        <button
            {...props}
            className={`px-6 py-3 min-w-40 hover:drop-shadow-md ${buttonTypes[buttonType]} ${className} rounded-lg text-sm cursor-pointer transition duration-300 ease-in-out`}
        >
            {children}
        </button>
    );
};

export default Button;
