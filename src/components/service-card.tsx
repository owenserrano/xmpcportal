import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl">
      <CardHeader className="items-center">
        <div className="bg-primary/10 p-4 rounded-full">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="mt-4 font-headline">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
