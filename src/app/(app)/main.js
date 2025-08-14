import Navigation from "./navigation";
import TopBar from "./TopBar";

const MainPage = ({ children, headerTitle = "Dashboard" }) => {
    return (
        <div className="flex-1">
            <TopBar headerTitle={headerTitle} />
            <main className="h-[calc(100vh-80px)] overflow-auto p-4 sm:p-6">{children}</main>
        </div>
    );
};

export default MainPage;
