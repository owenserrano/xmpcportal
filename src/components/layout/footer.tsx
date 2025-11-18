"use client"
import { useEffect, useState } from "react";
import { useTranslation } from "@/lib/i18n";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (!year) {
    return (
      <footer className="bg-secondary">
        <div className="container flex flex-col items-center justify-center py-6 text-sm text-secondary-foreground">
          <p>&copy; XMPC Technologies. {t('footer.rights')}</p>
          <p className="mt-2">{t('footer.tagline')}</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-secondary">
      <div className="container flex flex-col items-center justify-center py-6 text-sm text-secondary-foreground">
        <p>&copy; {year} XMPC Technologies. {t('footer.rights')}</p>
        <p className="mt-2">{t('footer.tagline')}</p>
      </div>
    </footer>
  );
}
