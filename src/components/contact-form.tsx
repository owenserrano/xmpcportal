"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/app/contact/actions";
import { useState, useTransition } from "react";
import { Loader2 } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export function ContactForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const { t } = useTranslation();

  const formSchema = z.object({
    name: z.string().min(2, { message: t('contact.form.validation.name') }),
    company: z.string().min(2, { message: t('contact.form.validation.company') }),
    email: z.string().email({ message: t('contact.form.validation.email') }),
    phone: z.string().optional(),
    message: z.string().min(10, { message: t('contact.form.validation.message') }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      const result = await submitContactForm(values);
      if (result.success) {
        toast({
          title: t('contact.form.toast.success.title'),
          description: t('contact.form.toast.success.description'),
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: t('contact.form.toast.error.title'),
          description: result.message || t('contact.form.toast.error.description'),
        });
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('contact.form.labels.name')}</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('contact.form.labels.company')}</FormLabel>
                <FormControl>
                  <Input placeholder="ACME Inc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('contact.form.labels.email')}</FormLabel>
                <FormControl>
                  <Input placeholder="john.doe@acme.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('contact.form.labels.phone')}</FormLabel>
                <FormControl>
                  <Input placeholder="+1 (555) 123-4567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('contact.form.labels.message')}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t('contact.form.placeholders.message')}
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full sm:w-auto" disabled={isPending}>
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {t('contact.form.submitButton')}
        </Button>
      </form>
    </Form>
  );
}
