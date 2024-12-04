"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function Navbar({ children }) {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
  return (
    <div className="flex h-screen">
      {/* Left Navbar */}
      <nav className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 font-bold text-lg border-b border-gray-700">
          App Name
        </div>
        <ul className="flex-grow">
          <li className="p-4 hover:bg-gray-700">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/products">Products</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/settings">Settings</Link>
          </li>
        </ul>
        <div className="p-4 border-t border-gray-700">
          <button onClick={() => handleLogout()}>
            <FontAwesomeIcon icon={faRightFromBracket} /> Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow p-6 bg-gray-100 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
