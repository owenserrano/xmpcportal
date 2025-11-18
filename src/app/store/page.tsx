"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function StorePage() {
  const { t } = useTranslation();
  
  const products = [
    {
      name: t('store.products.dellServer.name'),
      description: t('store.products.dellServer.description'),
      category: t('store.products.dellServer.category'),
      imageUrl: "/img/tienda/1.png",
      imageHint: "server rack"
    },
    {
      name: t('store.products.ciscoSwitch.name'),
      description: t('store.products.ciscoSwitch.description'),
      category: t('store.products.ciscoSwitch.category'),
      imageUrl: "/img/tienda/2.png",
      imageHint: "network switch"
    },
    {
      name: t('store.products.fortinetFirewall.name'),
      description: t('store.products.fortinetFirewall.description'),
      category: t('store.products.fortinetFirewall.category'),
      imageUrl: "/img/tienda/3.png",
      imageHint: "firewall appliance"
    },
    {
      name: t('store.products.hpeStorage.name'),
      description: t('store.products.hpeStorage.description'),
      category: t('store.products.hpeStorage.category'),
      imageUrl: "/img/tienda/4.png",
      imageHint: "storage array"
    },
    {
      name: t('store.products.hpServer.name'),
      description: t('store.products.hpServer.description'),
      category: t('store.products.hpServer.category'),
      imageUrl: "/img/tienda/5.png",
      imageHint: "server rack"
    },
    {
      name: t('store.products.ciscoRouter.name'),
      description: t('store.products.ciscoRouter.description'),
      category: t('store.products.ciscoRouter.category'),
      imageUrl: "/img/tienda/6.png",
      imageHint: "network router"
    },
  ];

  return (
    <div className="bg-background">
       <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl font-headline">{t('store.title')}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('store.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.name} className="flex flex-col overflow-hidden">
                  <div className="relative w-full h-60">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover"
                        data-ai-hint={product.imageHint}
                      />
                    </div>
                  <CardHeader>
                    <CardTitle className="font-headline">{product.name}</CardTitle>
                    <CardDescription>{product.category}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">{product.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      {t('store.addToCart')}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
