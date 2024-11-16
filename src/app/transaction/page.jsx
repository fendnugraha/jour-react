"use client";
import Link from "next/link";
import { useState } from "react";

export default function Transaction() {
  const [showTableProduct, setShowTableProduct] = useState(false);

  function toggleTableProduct() {
    setShowTableProduct(!showTableProduct);
  }
  return (
    <div>
      <div className="w-full bg-white py-6 px-12 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Transaction</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/transaction">Transaction</Link>
          </li>
        </ul>
      </div>
      <div className="w-full mt-6 py-6 px-12">
        <div className="grid grid-cols-3 gap-2">
          <div className="w-full py-4 px-4 rounded-2xl col-span-2 bg-white">
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2 relative">
                <form action="/search">
                  <input
                    onClick={toggleTableProduct}
                    className="w-full py-2 px-4 rounded-2xl border border-gray-300"
                    type="text"
                    placeholder="Search"
                  />
                </form>
                <div
                  style={{ display: showTableProduct ? "block" : "none" }}
                  className="absolute top-12 left-0 bg-white min-w-full rounded-lg space-x-2 shadow-sm border"
                >
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b text-sm hover:bg-slate-100">
                        <td className="py-2 px-4">Product name</td>
                        <td>200.000</td>
                        <td>
                          <button className="py-1 px-4 rounded-2xl bg-blue-500 text-white">
                            Add
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b text-sm hover:bg-slate-100">
                        <td className="py-2 px-4">Product name</td>
                        <td>200.000</td>
                        <td>
                          <button className="py-1 px-4 rounded-2xl bg-blue-500 text-white">
                            Add
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b text-sm hover:bg-slate-100">
                        <td className="py-2 px-4">Product name</td>
                        <td>200.000</td>
                        <td>
                          <button className="py-1 px-4 rounded-2xl bg-blue-500 text-white">
                            Add
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <select className="w-full py-2 px-4 rounded-2xl border border-gray-300">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
          <div className="w-full py-4 px-4 rounded-2xl bg-white">
            <h1 className="text-xl font-bold">Transaction</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
