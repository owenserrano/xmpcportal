"use client";

import Image from "next/image";

const clientLogos = [
  { name: "RMI Patagónica", path: "/img/clientes/itsa.png" },
  { name: "ROFEX", path: "/img/clientes/multipol.png" },
  { name: "Rizobacter", path: "/img/clientes/NASA.png" },
  { name: "OSDE", path: "/img/clientes/toyota.png" },
  { name: "Grupo Albanesi", path: "/img/clientes/vuteq.png" },
  { name: "Cooperación Seguros", path: "/img/clientes/zarate-muni.png" },
];

export function ClientCarousel() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
      {clientLogos.map((logo) => (
        <div
          key={logo.name}
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
