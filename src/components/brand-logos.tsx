"use client";

import Image from "next/image";

const brandLogos = [
  { name: "Dell", path: "/img/marcas/dell.png" },
  { name: "Cisco", path: "/img/marcas/cisco.png" },
  { name: "Fortinet", path: "/img/marcas/fortinet.png" },
  { name: "HPE", path: "/img/marcas/hp.png" },
  { name: "Proxmox", path: "/img/marcas/proxmox.png" },
  { name: "Microsoft", path: "/img/marcas/microsoft.png" },
];

export function BrandLogos() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
      {brandLogos.map((logo) => (
        <div
          key={logo.path}
          className="flex items-center justify-center p-4"
        >
          <Image
            src={logo.path}
            alt={logo.name}
            width={140}
            height={70}
            className="object-contain h-16 w-auto"
            style={{ filter: "grayscale(100%)", opacity: 0.7 }}
          />
        </div>
      ))}
    </div>
  );
}
