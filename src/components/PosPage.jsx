import React from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Header from "./Header";

const PosPage = ({ cart, addToCart }) => {
    return (
        <div className="flex-1 bg-gray-100 min-h-screen">
            {/* <h1 className="text-2xl font-bold mb-4">Point of Sales - Add to Cart</h1> */}
            <Header title={"Point of Sales - Add to Cart"} />
            <div className="grid grid-cols-3 gap-4">
                <ProductList addToCart={addToCart} />
            </div>
        </div>
    );
};

export default PosPage;
