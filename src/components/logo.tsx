import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/img/logo/logo.png"
      alt="XMPC Technologies Logo"
      width={140}
      height={35}
      className={cn("h-auto", className)}
    />
  );
}
