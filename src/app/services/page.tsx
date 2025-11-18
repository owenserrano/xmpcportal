"use client";

import Image from "next/image";
import { Briefcase, HardDrive, Server, ShieldCheck, CheckCircle } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function ServicesPage() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Server,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      points: [
        t('services.consulting.points.p1'),
        t('services.consulting.points.p2'),
        t('services.consulting.points.p3'),
        t('services.consulting.points.p4')
      ],
      imageUrl: "https://images.unsplash.com/photo-1580894908361-967195033215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxzZXJ2ZXIlMjByYWNrfGVufDB8fHx8MTc2MzQ0NzY5NHww&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "it consulting"
    },
    {
      icon: HardDrive,
      title: t('services.equipment.title'),
      description: t('services.equipment.description'),
      points: [
        t('services.equipment.points.p1'),
        t('services.equipment.points.p2'),
        t('services.equipment.points.p3'),
        t('services.equipment.points.p4')
      ],
      imageUrl: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBlcXVpcG1lbnR8ZW58MHx8fHwxNzE1ODEyMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "computer equipment"
    },
    {
      icon: ShieldCheck,
      title: t('services.security.title'),
      description: t('services.security.description'),
      points: [
        t('services.security.points.p1'),
        t('services.security.points.p2'),
        t('services.security.points.p3'),
        t('services.security.points.p4')
      ],
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjJWViZXIlMjBzZWN1cml0eXxlbnwwfHx8fDE3NjM0NDc3NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "cyber security"
    },
    {
      icon: Briefcase,
      title: t('services.support.title'),
      description: t('services.support.description'),
      points: [
        t('services.support.points.p1'),
        t('services.support.points.p2'),
        t('services.support.points.p3'),
        t('services.support.points.p4')
      ],
      imageUrl: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxoYXJkd2FyZSUyMHJlcGFpcnxlbnwwfHx8fDE3NjQ4NzI0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "hardware repair"
    },
  ];

  return (
    <div className="bg-background">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl font-headline">{t('services.title')}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container space-y-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid items-center gap-8 md:grid-cols-2 lg:gap-16`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : "md:order-1"}>
                <div className="flex items-center gap-4">
                   <div className="bg-primary/10 p-3 rounded-full">
                    <service.icon className="h-6 w-6 text-primary" />
                   </div>
                  <h2 className="text-3xl font-bold tracking-tight font-headline">{service.title}</h2>
                </div>
                <p className="mt-4 text-lg text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-8 space-y-4">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : "md:order-2"}>
                 <Image
                  src={service.imageUrl}
                  alt={service.title}
                  width={500}
                  height={350}
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                  data-ai-hint={service.imageHint}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
