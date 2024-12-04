"use client";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Paginator from "@/components/Paginator";

export default function Dashboard() {
  const [productTable, setProductTable] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const token = localStorage.getItem("token");
  if (!token) {
    router.push("/login");
  }
  const fetchProduct = async (url) => {
    try {
      const response = await axios.get(`${url}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProductTable(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchProduct(`${process.env.NEXT_PUBLIC_API_URL}/api/product`);
  }, []);

  const handleChangePage = (url) => {
    fetchProduct(url);
  };
  return (
    <>
      <Navbar />
      <div className="m-12">
        <table className="w-full table-auto text-xs">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="p-4">Name</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {productTable.data && productTable.data.length > 0 ? (
              productTable.data.map((item, index) => (
                <tr className="border-b" key={index}>
                  <td className="p-3">{item.name}</td>
                  <td>{item.end_stock}</td>
                  <td className="text-end p-3">{item.price}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="my-2">
          <Paginator links={productTable} handleChangePage={handleChangePage} />
          {/* <button
            onClick={() => handleChangePage(productTable.next_page_url)}
            className="bg-red-300 p-4 rounded-xl"
          >
            Next Page
          </button> */}
        </div>
      </div>
    </>
  );
}
