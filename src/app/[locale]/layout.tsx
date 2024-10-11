import localFont from 'next/font/local'
import ThemeProviders from '@/providers/ThemeProvider'
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from 'next-intl'
import '../globals.css'

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProviders>{children}</ThemeProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
