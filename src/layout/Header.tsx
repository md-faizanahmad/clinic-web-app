"use client";

import Link from "next/link";
import { JSX, useState } from "react";
import { Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Appointments", href: "/appointments" },
  { label: "Doctors", href: "/doctors" },
  { label: "Contact", href: "/contact" },
];

export default function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="w-full bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600 tracking-tight"
          >
            ClinicCare
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item: NavItem) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item: NavItem) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-4 border-t space-y-3">
              <Link
                href="/login"
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="block bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700 font-medium"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
