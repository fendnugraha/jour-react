"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Transaction() {
  const [showTableProduct, setShowTableProduct] = useState(false);
  const tableProductRef = useRef(null);
  const [Cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...Cart, product]);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        tableProductRef.current &&
        !tableProductRef.current.contains(event.target)
      ) {
        setShowTableProduct(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  console.log(Cart);
  return (
    <>
      <nav className="w-full bg-white py-6 px-12 flex items-center justify-between mb-12">
        <h1 className="text-2xl font-bold">Transaction</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/transaction">Transaction</Link>
          </li>
        </ul>
      </nav>

      {/* main page */}
      <div className="sm:px-12 lg:px-16">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2" ref={tableProductRef}>
            <div className="bg-white mb-3 rounded-2xl relative">
              <input
                onFocus={() => setShowTableProduct(true)}
                type="search"
                className="w-full p-2 border rounded-xl focus:outline-blue-500"
                placeholder="Search Product ..."
              />
              {showTableProduct && (
                <div className="absolute top-10 right-0 w-full shadow-sm border">
                  <table className="w-full bg-white rounded-2xl">
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-2">Product 1</td>
                        <td className="px-4 py-2 text-end">200.000</td>
                        <td className="px-4 py-2 text-center">
                          <button className="bg-blue-500 text-sm text-white py-2 px-4 rounded-2xl">
                            Add to Cart
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2">Product 2</td>
                        <td className="px-4 py-2 text-end">260.000</td>
                        <td className="px-4 py-2 text-center">
                          <button
                            onClick={() => handleAddToCart("Product 2")}
                            className="bg-blue-500 text-sm text-white py-2 px-4 rounded-2xl"
                          >
                            Add to Cart
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2">Product 3</td>
                        <td className="px-4 py-2 text-end">250.000</td>
                        <td className="px-4 py-2 text-center">
                          <button
                            onClick={() => handleAddToCart("Product 3")}
                            className="bg-blue-500 text-sm text-white py-2 px-4 rounded-2xl"
                          >
                            Add to Cart
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className="">
              <div className="card p-4">
                <h1 className="text-xl font-bold">Product 1</h1>
              </div>
            </div>
          </div>
          <div className="bg-white p-4">
            <h1>Cart</h1>
          </div>
        </div>
      </div>
      {/* end main page */}
    </>
  );
}
