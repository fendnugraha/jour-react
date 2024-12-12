import React from "react";

const Cart = ({ cart }) => {
    const total = cart.reduce((sum, product) => sum + product.price, 0);

    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Cart</h2>
            {cart.length === 0 ? (
                <p className="text-gray-600">Cart is empty</p>
            ) : (
                <ul className="space-y-4">
                    {cart.map((product, index) => (
                        <li key={index} className="flex justify-between items-center">
                            <span>{product.name}</span>
                            <span>${product.price}</span>
                        </li>
                    ))}
                </ul>
            )}
            <div className="mt-4 pt-4 border-t flex justify-between font-bold">
                <span>Total:</span>
                <span>${total}</span>
            </div>
        </div>
    );
};

export default Cart;
