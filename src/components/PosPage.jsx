import React from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Header from "./Header";
import { ShoppingBagIcon } from "@heroicons/react/16/solid";

const PosPage = ({ cart, addToCart }) => {
    return (
        <div className="flex-1 bg-gray-100 min-h-screen">
            {/* <h1 className="text-2xl font-bold mb-4">Point of Sales - Add to Cart</h1> */}
            <Header title={"Point of Sales - Add to Cart"} />
            <div className="grid grid-cols-4 grid-rows-2 gap-4 p-4 h-[80%]">
                <div className="flex flex-col p-6 items-start justify-center gap-4 shadow-sm bg-white rounded-2xl">
                    <div>
                        <h1 className="text-sm">
                            <ShoppingBagIcon className="w-4 h-4 inline" /> Total Sales
                        </h1>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Rp. 200,000,000</h1>
                    </div>
                    <div className="border-t w-full p-4 flex justify-end">
                        <a>View report</a>
                    </div>
                </div>
                <div className="flex justify-center items-center shadow-sm bg-white rounded-2xl">
                    <h1 className="text-2xl">Grid 2</h1>
                </div>
                <div className="flex justify-center items-center shadow-sm col-span-2 row-span-2 bg-white rounded-2xl">
                    <h1 className="text-2xl">Grid 3</h1>
                </div>
                <div className="flex justify-center items-center shadow-sm bg-white rounded-2xl">
                    <h1 className="text-2xl">Grid 4</h1>
                </div>
                <div className="flex justify-center items-center shadow-sm bg-white rounded-2xl">
                    <h1 className="text-2xl">Grid 5</h1>
                </div>
            </div>
        </div>
    );
};

export default PosPage;
