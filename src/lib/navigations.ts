// lib/navigation.ts
import { Home, Stethoscope, HeartPulse, UserCircle } from "lucide-react";

export const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Doctor", href: "/doctor", icon: UserCircle },
  { label: "Services", href: "/services", icon: Stethoscope },
  { label: "Emergency", href: "/emergency", icon: HeartPulse },
  { label: "Contact", href: "/contact", icon: HeartPulse },
];

export const logoUrl =
  "https://res.cloudinary.com/dyefyrszz/image/upload/v1771937195/1771937091315_snxchi.png";
