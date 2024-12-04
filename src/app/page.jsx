"use client";
import { useState } from "react";
import axios, { initializeCsrf } from "@/utils/axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await initializeCsrf(); // Initialize CSRF token
      await axios.post("/login", { email, password });
      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          required
          className="p-3 border rounded-md "
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          className="p-3 border rounded-md "
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white py-3 px-6 rounded-2xl"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
