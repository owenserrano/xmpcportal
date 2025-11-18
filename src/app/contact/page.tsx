"use client";

import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="bg-background">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl font-headline">{t('contact.title')}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight font-headline">{t('contact.form.title')}</h2>
            <p className="mt-2 text-muted-foreground">{t('contact.form.subtitle')}</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
          <div className="bg-secondary rounded-lg p-8">
             <h2 className="text-3xl font-bold tracking-tight font-headline">{t('contact.info.title')}</h2>
             <p className="mt-2 text-muted-foreground">{t('contact.info.subtitle')}</p>
             <ul className="mt-8 space-y-6 text-lg">
                <li className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <span>info@xmpc.com.ar</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <span>+54 9 11 6666-4731</span>
                </li>
                <li className="flex items-center gap-4">
                   <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                   </div>
                  <span>Ituzaingo 761, Zárate, Buenos Aires 2800</span>
                </li>
             </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
