"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget as HTMLFormElement);
    const email = form.get("email");
    const password = form.get("password");

    if (email === "admin@cliniccare.com" && password === "admin123") {
      localStorage.setItem("admin", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-lg font-semibold text-center mb-5">Admin Login</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Admin Email"
            className="w-full border rounded-md px-3 py-2 text-sm"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full border rounded-md px-3 py-2 text-sm"
            required
          />

          {error && <p className="text-red-500 text-xs">{error}</p>}

          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-2 rounded-md text-sm hover:bg-sky-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
