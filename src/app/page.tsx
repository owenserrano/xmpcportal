"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Server, ShieldCheck, HardDrive, Briefcase } from "lucide-react";
import { ServiceCard } from "@/components/service-card";
import { useTranslation } from "@/lib/i18n";
import { ClientCarousel } from "@/components/client-carousel";
import { BrandLogos } from "@/components/brand-logos";

const heroImage = PlaceHolderImages.find((img) => img.id === "hero-background");
const whyChooseUsImage = PlaceHolderImages.find((img) => img.id === "why-choose-us");

export default function Home() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Server,
      title: t('home.services.consulting.title'),
      description: t('home.services.consulting.description'),
    },
    {
      icon: HardDrive,
      title: t('home.services.equipment.title'),
      description: t('home.services.equipment.description'),
    },
    {
      icon: ShieldCheck,
      title: t('home.services.security.title'),
      description: t('home.services.security.description'),
    },
    {
      icon: Briefcase,
      title: t('home.services.support.title'),
      description: t('home.services.support.description'),
    },
  ];

  const whyChooseUsPoints = [
    t('home.whyChooseUs.points.p1'),
    t('home.whyChooseUs.points.p2'),
    t('home.whyChooseUs.points.p3'),
    t('home.whyChooseUs.points.p4'),
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl font-headline">
            {t('home.hero.title')}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            {t('home.hero.subtitle')}
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">{t('header.cta')}</Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">{t('home.services.title')}</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('home.services.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container grid items-center gap-8 md:grid-cols-2 lg:gap-16">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">{t('home.whyChooseUs.title')}</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('home.whyChooseUs.description')}
            </p>
            <ul className="mt-8 space-y-4">
              {whyChooseUsPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            {whyChooseUsImage && (
              <Image
                src={whyChooseUsImage.imageUrl}
                alt={whyChooseUsImage.description}
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
                data-ai-hint={whyChooseUsImage.imageHint}
              />
            )}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">{t('home.clients.title')}</h2>
          </div>
          <ClientCarousel />
        </div>
      </section>

      {/* Brand Logos Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">{t('home.partners.title')}</h2>
          </div>
          <BrandLogos />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">
            {t('home.cta.title')}
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link href="/contact">{t('home.cta.button')}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
