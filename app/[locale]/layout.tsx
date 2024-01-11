import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@fss-fmi-site/app/i18n';
import { getMessages } from 'next-intl/server';

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
          {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
          {/* <Navbar> */}
          {/*  <Link href={`/${locale}`}> */}
          {/*    <span className="font-bold capitalize"> */}
          {/*      ФСС | ФМИ
            {/*    </span> */}
          {/*  </Link> */}

          {/*  <NavbarLinks className="block xl:hidden" variant="mobile" /> */}
          {/*  <NavbarLinks */}
          {/*    className="hidden xl:flex justify-center" */}
          {/*    variant="desktop" */}
          {/*  /> */}
          {/* </Navbar> */}
          {children}
          {/* </ThemeProvider> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
