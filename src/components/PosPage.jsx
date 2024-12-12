import React from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Header from "./Header";
import {
    ArrowRightCircleIcon,
    CheckBadgeIcon,
    PresentationChartBarIcon,
    ShoppingBagIcon,
    WrenchIcon,
} from "@heroicons/react/16/solid";

const PosPage = ({ cart, addToCart }) => {
    return (
        <div className="flex-1 bg-gray-100 min-h-screen">
            {/* <h1 className="text-2xl font-bold mb-4">Point of Sales - Add to Cart</h1> */}
            <Header title={"Point of Sales - Add to Cart"} />
            <div className="grid grid-cols-4 grid-rows-2 gap-4 p-4 h-[80%]">
                <div className="flex flex-col p-6 items-start justify-between gap-4 shadow-sm bg-white rounded-2xl">
                    <div>
                        <h1 className="text-sm">
                            <PresentationChartBarIcon className="w-4 h-4 inline text-indigo-600" /> Total Sales
                        </h1>
                    </div>
                    <div>
                        <span>Rp.</span>
                        <h1 className="text-3xl font-bold">200,000,000</h1>
                    </div>
                    <div className="border-t w-full pt-2 flex justify-end">
                        <a href="#" className="text-gray-600">
                            View report <ArrowRightCircleIcon className="w-4 h-4 ml-2 align-middle inline" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col p-6 items-start justify-between gap-4 shadow-sm bg-white rounded-2xl">
                    <div>
                        <h1 className="text-sm">
                            <ShoppingBagIcon className="w-4 h-4 inline text-indigo-600" /> Total Orders
                        </h1>
                    </div>
                    <div>
                        <span>Orders</span>
                        <h1 className="text-3xl font-bold">200</h1>
                    </div>
                    <div className="border-t w-full pt-2 flex justify-end">
                        <a href="#" className="text-gray-600">
                            View report <ArrowRightCircleIcon className="w-4 h-4 ml-2 align-middle inline" />
                        </a>
                    </div>
                </div>
                <div className="p-6 shadow-sm col-span-2 row-span-2 bg-white rounded-2xl">
                    <h1 className="text-2xl font-bold">New order</h1>
                    <table className="w-full mt-4 table-auto text-sm">
                        <thead>
                            <tr className="border-b">
                                <th className="p-4">Order number</th>
                                <th>Phone type</th>
                                <th>Customer</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-3">Order number</td>
                                <td>Phone type</td>
                                <td>Customer</td>
                                <td>Status</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-3">Order number</td>
                                <td>Phone type</td>
                                <td>Customer</td>
                                <td>Status</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-3">Order number</td>
                                <td>Phone type</td>
                                <td>Customer</td>
                                <td>Status</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-3">Order number</td>
                                <td>Phone type</td>
                                <td>Customer</td>
                                <td>Status</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-3">Order number</td>
                                <td>Phone type</td>
                                <td>Customer</td>
                                <td>Status</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col p-6 items-start justify-between gap-4 shadow-sm bg-white rounded-2xl">
                    <div>
                        <h1 className="text-sm">
                            <WrenchIcon className="w-4 h-4 inline text-indigo-600" /> On Process
                        </h1>
                    </div>
                    <div>
                        <span>Unit</span>
                        <h1 className="text-3xl font-bold">50</h1>
                    </div>
                    <div className="border-t w-full pt-2 flex justify-end">
                        <a href="#" className="text-gray-600">
                            View report <ArrowRightCircleIcon className="w-4 h-4 ml-2 align-middle inline" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col p-6 items-start justify-between gap-4 shadow-sm bg-white rounded-2xl">
                    <div>
                        <h1 className="text-sm">
                            <CheckBadgeIcon className="w-4 h-4 inline text-indigo-600" /> Finished
                        </h1>
                    </div>
                    <div>
                        <span>Unit</span>
                        <h1 className="text-3xl font-bold">30</h1>
                    </div>
                    <div className="border-t w-full pt-2 flex justify-end">
                        <a href="#" className="text-gray-600">
                            View report <ArrowRightCircleIcon className="w-4 h-4 ml-2 align-middle inline" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PosPage;
