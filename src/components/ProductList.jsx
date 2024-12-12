import React from "react";

const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 150 },
];

const ProductList = ({ addToCart }) => {
    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Products</h2>
            <ul className="space-y-4">
                {products.map((product) => (
                    <li
                        key={product.id}
                        className="flex justify-between items-center p-4 border rounded hover:bg-gray-100"
                    >
                        <div>
                            <h3 className="font-medium">{product.name}</h3>
                            <p className="text-gray-600">${product.price}</p>
                        </div>
                        <button
                            onClick={() => addToCart(product)}
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                            Add to Cart
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
