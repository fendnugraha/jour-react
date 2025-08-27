"use client";
import MainPage from "@/app/(app)/main";
import Breadcrumb from "@/app/components/Breadcrumb";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Label from "@/app/components/Label";
import { MinusIcon, PlusIcon, XIcon } from "lucide-react";
import { use, useEffect, useRef, useState } from "react";

const OrderDetailPage = ({ params }) => {
    const OrderPageBreadcrumb = [
        {
            name: "Order",
            href: "/order",
            current: false,
        },
        {
            name: "Detail Order",
            href: "/order/detail/",
            current: true,
        },
    ];
    const { orderNumber } = use(params);
    const [searchProduct, setSearchProduct] = useState("");

    const productDummy = [
        {
            id: 1,
            name: "LCD Iphone 14 Pro Max",
            price: "Rp 10.000",
            quantity: 2,
        },
        {
            id: 2,
            name: "Baterai Iphone 14 Pro Max",
            price: "Rp 20.000",
            quantity: 1,
        },
        {
            id: 3,
            name: "Jasa Service",
            price: "Rp 30.000",
            quantity: 3,
        },
        {
            id: 4,
            name: "Jasa Unlock Email Password",
            price: "Rp 100.000",
            quantity: 3,
        },
        {
            id: 5,
            name: "Jasa Unlock Email Password",
            price: "Rp 100.000",
            quantity: 3,
        },
        {
            id: 6,
            name: "Jasa Unlock Email Password",
            price: "Rp 100.000",
            quantity: 3,
        },
    ];
    const [showProductList, setShowProductList] = useState(false);
    const productReff = useRef();

    useEffect(() => {
        document.addEventListener("click", (event) => {
            if (productReff.current && !productReff.current.contains(event.target)) {
                setShowProductList(false);
            }
        });
    }, []);
    return (
        <MainPage headerTitle="Order / Detail">
            <Breadcrumb BreadcrumbArray={OrderPageBreadcrumb} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-1 sm:col-span-2">
                    <div className="relative" ref={productReff}>
                        <Label>Cari barang</Label>
                        <div className="flex items-end gap-4 mb-2">
                            <Input
                                type="search"
                                onFocus={() => setShowProductList(true)}
                                onChange={(e) => setSearchProduct(e.target.value)}
                                className="w-full"
                                placeholder="Search"
                            />
                            <Button buttonType="danger">Clear list</Button>
                        </div>

                        <div
                            className={`absolute min-w-3/4 bg-white dark:bg-slate-800 rounded-xl shadow ${
                                showProductList ? "py-1 h-fit border border-lime-500" : "h-0 overflow-hidden"
                            } transition-all duration-300 ease-in-out`}
                        >
                            {productDummy
                                .filter((item) => item.name.toLowerCase().includes(searchProduct.toLowerCase()))
                                .map((item) => (
                                    <div
                                        className="flex justify-between items-center hover:bg-slate-100 px-4 py-2 last:border-0 border-b border-dashed border-slate-300"
                                        key={item.id}
                                    >
                                        <div>
                                            <h2 className="text-sm">{item.name}</h2>
                                            <p className="text-sm text-gray-500">{item.price} Stock: 10</p>
                                        </div>
                                        <button className="border rounded-lg p-2 text-xs bg-lime-300 border-lime-300 cursor-pointer focus:scale-95">
                                            Tambahkan ke Order
                                        </button>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="mt-4 card">
                        <h1 className="mb-2 font-bold text-lg px-4 pt-4">
                            Order List <span className="text-gray-500">(3 items)</span>
                        </h1>
                        <div className="max-h-[calc(85px*5)] overflow-auto">
                            {productDummy.map((item) => (
                                <div className="flex justify-between items-center p-4 last:border-0 border-b border-dashed border-slate-300" key={item.id}>
                                    <div>
                                        <h2 className="mb-2 font-semibold text-sm">{item.name}</h2>
                                        <div className="flex gap-4">
                                            <div className="flex items-center border text-sm border-slate-300 rounded-xl w-fit h-fit">
                                                <button className="py-1 px-2">
                                                    <MinusIcon size={20} />
                                                </button>
                                                <h1 className="border-l border-r border-slate-300 px-4 py-1 bg-slate-300">{item.quantity}</h1>
                                                <button className="py-1 px-2">
                                                    <PlusIcon size={20} />
                                                </button>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <label className="font-medium text-xs text-gray-700 dark:text-white mb-1">Rp.</label>
                                                <input
                                                    type="number"
                                                    className="w-auto text-sm border border-slate-300 rounded-xl px-4 py-1"
                                                    placeholder="Harga"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <h1 className="text-lg font-semibold">{item.price}</h1>
                                        <button className="bg-red-500 text-white hover:bg-red-400 rounded-lg p-2 text-xs  cursor-pointer focus:scale-95">
                                            <XIcon size={20} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="">
                    <div>
                        <Label>Customer</Label>
                        <select className="form-select !bg-white w-full">
                            <option>General</option>
                            <option>John Doe</option>
                            <option>Jane Doe</option>
                            <option>Bob Doe</option>
                        </select>
                    </div>
                    <div className="mt-4 card p-4">
                        <h1 className="font-semibold text-sm">Total Bayar</h1>
                        <h1 className="font-semibold text-3xl">Rp 25.000.000</h1>
                    </div>
                    <div className="mt-4 card p-4">
                        <h1 className="font-semibold text-sm">Biaya & Potongan</h1>
                        <div className="flex justify-between items-center my-2">
                            <h1 className="text-sm">Biaya Pengiriman</h1>
                            <h1 className="text-sm">Rp 25.000.000</h1>
                        </div>
                        <div className="flex justify-between items-center my-2">
                            <h1 className="text-sm">Diskon</h1>
                            <h1 className="text-sm">Rp 25.000.000</h1>
                        </div>
                    </div>
                    <Button buttonType="dark" className="w-full mt-4">
                        Checkout
                    </Button>
                </div>
            </div>
        </MainPage>
    );
};

export default OrderDetailPage;
