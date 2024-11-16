import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <div className="w-full bg-white py-6 px-12 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/transaction">Transaction</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
