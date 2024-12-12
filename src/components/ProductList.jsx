import React from "react";

const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 150 },
];

const ProductList = ({ addToCart }) => {
    return (
        <div className="grid grid-cols-5 gap-4 grid-rows-2 w-full">
            <div className="bg-gray-200 p-4">
                <h1>Grid 1</h1>
            </div>
        </div>
    );
};

export default ProductList;
