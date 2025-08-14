import MainPage from "../main";

const Dashboard = () => {
    return (
        <MainPage headerTitle="Dashboard">
            {/* Konten dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
                    <h2 className="text-lg font-bold text-slate-700 dark:text-white">Total Sales</h2>
                    <p className="text-2xl font-semibold mt-2 text-green-500">Rp 25.000.000</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
                    <h2 className="text-lg font-bold text-slate-700 dark:text-white">Orders</h2>
                    <p className="text-2xl font-semibold mt-2 text-blue-500">120</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
                    <h2 className="text-lg font-bold text-slate-700 dark:text-white">Inventory</h2>
                    <p className="text-2xl font-semibold mt-2 text-orange-500">350 Items</p>
                </div>
            </div>
        </MainPage>
    );
};

export default Dashboard;
