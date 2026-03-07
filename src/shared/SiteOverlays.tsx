"use client";

import { usePathname } from "next/navigation";
import BookingDock from "@/src/booking/mobile/BookingDock";
import ClinicChatbot from "@/src/bot/ClinicChatWidget";

export default function SiteOverlays() {
  const pathname = usePathname();

  // hide on admin routes
  if (pathname.startsWith("/admin")) return null;

  return (
    <>
      <BookingDock /> <ClinicChatbot />
    </>
  );
}
