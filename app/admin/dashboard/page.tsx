"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CalendarCheck, UserRound, Stethoscope } from "lucide-react";
import AppointmentCalendar from "../AppointmentCalendar/page";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("admin");
    if (!auth) router.push("/admin/login");
  }, []);

  const stats = [
    {
      title: "Appointments",
      value: 24,
      icon: <CalendarCheck size={22} />,
    },
    {
      title: "Doctors",
      value: 6,
      icon: <Stethoscope size={22} />,
    },
    {
      title: "Patients",
      value: 128,
      icon: <UserRound size={22} />,
    },
  ];

  const appointments = [
    {
      name: "Rahul Kumar",
      doctor: "Dr. Sharma",
      time: "10:30 AM",
      date: "Today",
    },
    {
      name: "Priya Singh",
      doctor: "Dr. Khan",
      time: "11:15 AM",
      date: "Today",
    },
    {
      name: "Amit Verma",
      doctor: "Dr. Ali",
      time: "01:00 PM",
      date: "Today",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      {/* Header */}

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Clinic Admin Dashboard</h1>

        <button
          onClick={() => {
            localStorage.removeItem("admin");
            router.push("/admin/login");
          }}
          className="bg-red-500 text-white px-3 py-2 rounded text-sm"
        >
          Logout
        </button>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-lg shadow-sm p-5 flex items-center gap-4"
          >
            <div className="bg-sky-100 text-sky-600 p-3 rounded-md">
              {item.icon}
            </div>

            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <p className="text-xl font-semibold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Appointments */}

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Appointments</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left border-b">
              <tr>
                <th className="py-2">Patient</th>
                <th className="py-2">Doctor</th>
                <th className="py-2">Time</th>
                <th className="py-2">Date</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((item, i) => (
                <tr key={i} className="border-b">
                  <td className="py-3">{item.name}</td>
                  <td>{item.doctor}</td>
                  <td>{item.time}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-xl font-semibold mb-6">Appointment Calendar</h2>

        <AppointmentCalendar />
      </div>
    </div>
  );
}
