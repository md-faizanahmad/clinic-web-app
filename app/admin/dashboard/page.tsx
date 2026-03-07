"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem("admin");

    if (!isAdmin) {
      router.push("/admin/login");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("admin");
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Admin Dashboard</h1>

        <button
          onClick={logout}
          className="text-sm bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>

      <p className="text-gray-600 text-sm">Demo admin panel for ClinicCare.</p>
    </div>
  );
}
