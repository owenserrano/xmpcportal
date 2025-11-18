"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string(),
  company: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string(),
});

export async function submitContactForm(values: z.infer<typeof formSchema>): Promise<{ success: boolean, message?: string }> {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: "Datos inválidos." };
  }

  // Here you would typically save to a database (e.g., using Prisma with SQLite)
  // or send an email.
  console.log("Nuevo mensaje de contacto:", parsed.data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // For now, we just return a success message.
  return { success: true };
}
