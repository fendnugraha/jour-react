"use client";
import Button from "@/app/components/Button";
import MainPage from "../main";
import Breadcrumb from "@/app/components/Breadcrumb";
import { ArrowBigRightDash, DownloadIcon, FilterIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import { formatNumber, todayDate } from "@/app/libs/format";
import StatusBadge from "@/app/components/StatusBadge";
import InputGroup from "@/app/components/InputGroup";
import Link from "next/link";
import Modal from "@/app/components/Modal";
import Label from "@/app/components/Label";
import Input from "@/app/components/Input";

const OrderPage = () => {
    const today = todayDate();
    const OrderPageBreadcrumb = [
        {
            name: "Order",
            href: "/order",
            current: false,
        },
        {
            name: "New Order",
            href: "/order/new",
            current: true,
        },
    ];
    const OrderListDummy = [
        {
            orderNumber: "ORD-0001",
            customer: "John Doe",
            orderDate: "2023-01-01",
            status: "Pending",
        },
        {
            orderNumber: "ORD-0002",
            customer: "Jane Doe",
            orderDate: "2023-01-02",
            status: "In Progress",
        },
        {
            orderNumber: "ORD-0003",
            customer: "Bob Doe",
            orderDate: "2023-01-03",
            status: "Finished",
        },
        {
            orderNumber: "ORD-0004",
            customer: "Alice Doe",
            orderDate: "2023-01-04",
            status: "Completed",
        },
        {
            orderNumber: "ORD-0005",
            customer: "Ethan Doe",
            orderDate: "2023-01-05",
            status: "Canceled",
        },
        {
            orderNumber: "ORD-0006",
            customer: "Olivia Doe",
            orderDate: "2023-01-06",
            status: "Rejected",
        },
    ];
    const [CurrentOrderStatus, setCurrentOrderStatus] = useState("All Orders");
    const OrderStatus = ["All Orders", "Pending", "In Progress", "Finished", "Completed", "Canceled", "Rejected"];
    const countOrderByStatus = (status) => {
        if (status === "All Orders") return OrderListDummy.length;
        return OrderListDummy.filter((order) => order.status === status).length;
    };

    const [isModalCreateOrderOpen, setIsModalCreateOrderOpen] = useState(false);
    const closeModal = () => {
        setIsModalCreateOrderOpen(false);
    };
    return (
        <MainPage headerTitle="Order">
            <Breadcrumb BreadcrumbArray={OrderPageBreadcrumb} />
            <Button onClick={() => setIsModalCreateOrderOpen(true)}>New Order</Button>
            <div className="mt-4 card">
                <div className="p-4 flex items-start justify-between">
                    <div>
                        {OrderStatus.map((status, index) => (
                            <button
                                className={`mr-2 sm:mr-4 py-2 cursor-pointer text-xs ${
                                    CurrentOrderStatus === status
                                        ? "border-b-2 border-blue-500 text-slate-700 dark:text-orange-300"
                                        : "text-slate-400 hover:text-slate-500"
                                }`}
                                onClick={() => setCurrentOrderStatus(status)}
                                key={index}
                            >
                                {status}{" "}
                                <span className={`ml-2 ${CurrentOrderStatus === status ? "bg-blue-500" : "bg-slate-400"} text-white px-2 rounded-lg`}>
                                    {formatNumber(countOrderByStatus(status))}
                                </span>
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-1">
                        <InputGroup maxWidth="max-w-sm" InputIcon={<SearchIcon size={18} />} placeholder="Search" />
                        <button className="small-button">
                            <DownloadIcon size={18} />
                        </button>
                        <button className="small-button">
                            <FilterIcon size={18} />
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm table">
                        <thead>
                            <tr>
                                <th className="">Order Number</th>
                                <th className="">Customer</th>
                                <th className="">Order Date</th>
                                <th className="">Status</th>
                                <th className="">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {OrderListDummy.filter((order) => order.status === CurrentOrderStatus || CurrentOrderStatus === "All Orders").map(
                                (order, index) => (
                                    <tr key={index}>
                                        <td className="">{order.orderNumber}</td>
                                        <td className="">
                                            {order.customer} <span className="block text-xs text-slate-400">SAMSUNG S24 Ultra</span>
                                        </td>
                                        <td className="">{order.orderDate}</td>
                                        <td className="text-center">
                                            <StatusBadge status={order.status} />
                                        </td>
                                        <td className="text-center">
                                            <Link
                                                className="hover:text-orange-500 dark:hover:text-orange-300 hover:underline"
                                                href={`/order/detail/${order.orderNumber}`}
                                            >
                                                View Details
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal isOpen={isModalCreateOrderOpen} onClose={closeModal} modalTitle="Create New Order" maxWidth="max-w-2xl">
                <form className="space-y-4">
                    <div className="">
                        <Label htmlFor="date_issued">Tanggal</Label>
                        <Input type="datetime-local" className="mt-1 w-full" id="date_issued" />
                    </div>
                    <div className="">
                        <Label htmlFor="customer_name">Nama Customer</Label>
                        <Input type="text" className="mt-1 w-full" id="customer_name" />
                    </div>
                    <div className="">
                        <Label htmlFor="customer_address">Alamat Customer</Label>
                        <textarea type="text" className="mt-1 w-full form-control" id="customer_address" />
                    </div>
                    <div className="">
                        <Label htmlFor="gender">Jenis Kelamin</Label>
                        <select id="gender" className="mt-1 w-full form-control">
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                    </div>
                    <div className="flex justify-end">
                        <Button type="submit">Create</Button>
                    </div>
                </form>
            </Modal>
        </MainPage>
    );
};

export default OrderPage;
