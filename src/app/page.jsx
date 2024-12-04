"use client";
import axios from "axios";
import { useRouter } from "next/navigation"; // Pastikan menggunakan useRouter dari Next.js
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/login`,
        {
          email,
          password,
        }
      );

      // Jika response berisi token
      if (response.data?.token) {
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
        router.push("/dashboard"); // Redirect ke halaman dashboard
      } else {
        // Jika token tidak ditemukan dalam response
        setError("Login failed: No token received");
      }

      setError(null); // Reset error jika login berhasil
    } catch (error) {
      console.error("Error during login:", error); // Log error untuk debugging
      // Menangani kesalahan yang terjadi saat login
      setError(error.response?.data?.message || "An unexpected error occurred");
    }
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
      <form onSubmit={handleLogin}>
        <div className="flex flex-col gap-2 justify-center items-center bg-gray-200 p-6 rounded-2xl">
          <h1 className="text-2xl pb-4">Login Page</h1>
          {error && <p className="text-red-500">{error}</p>}{" "}
          {/* Tampilkan pesan error jika ada */}
          <div className="grid grid-cols-3 gap-2 justify-between items-center w-full">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="col-span-2 bg-gray-100 p-2"
              type="email"
              id="email"
              required
            />
          </div>
          <div className="grid grid-cols-3 gap-2 justify-between items-center w-full">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className="col-span-2 bg-gray-100 p-2"
              type="password"
              id="password"
            />
          </div>
          <div className="w-full pt-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
