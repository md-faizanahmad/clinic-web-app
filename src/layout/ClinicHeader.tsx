"use client";

import { usePathname } from "next/navigation";
import { DesktopNav } from "./DesktopNav";
import { MobileHeader } from "./MobileHeader";
import { MobileBottomNav } from "./MobileBottomNav";

export default function ClinicHeader() {
  const pathname = usePathname();

  return (
    <>
      <DesktopNav pathname={pathname} />
      <MobileHeader />
      <MobileBottomNav pathname={pathname} />
    </>
  );
}
