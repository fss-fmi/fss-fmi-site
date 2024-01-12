import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@fss-fmi-site/app/i18n';
import { getMessages } from 'next-intl/server';
import Link from 'next/link';
import { Navbar } from '@fss-fmi-site/components/navbar/navbar';
import { NavbarLinks } from '@fss-fmi-site/components/navbar-links/navbar-links';
import { ThemeProvider } from '@fss-fmi-site/providers/theme-provider';

export const metadata = {
  title: 'Факултетен студентски съвет при ФМИ',
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar>
              <Link href={`/${locale}`}>
                <span className="font-bold capitalize">ФСС | ФМИ</span>
              </Link>

              <NavbarLinks className="block md:hidden" variant="mobile" />
              <NavbarLinks
                className="hidden md:flex justify-center"
                variant="desktop"
              />
            </Navbar>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
