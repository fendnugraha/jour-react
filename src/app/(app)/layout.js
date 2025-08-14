"use client";
import Navigation from "./navigation";

const AppLayout = ({ children }) => {
    return (
        <div className="flex h-screen overflow-hidden">
            <Navigation />
            {children}
        </div>
    );
};

export default AppLayout;
