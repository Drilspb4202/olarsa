import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const montserrat = Montserrat({ subsets: ["cyrillic", "latin"] })

export const metadata: Metadata = {
  title: "Технические Услуги Ольги",
  description:
    "Профессиональные технические услуги, включая интеграцию доменов, разработку чат-ботов, настройку GetCourse и создание лендингов на Tilda.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={montserrat.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Script id="grammarly-suppression">
            {`
              // Удаляем атрибуты Grammarly после загрузки страницы
              window.addEventListener('load', function() {
                document.querySelectorAll('[data-gr-ext-installed], [data-new-gr-c-s-check-loaded]').forEach(el => {
                  el.removeAttribute('data-gr-ext-installed');
                  el.removeAttribute('data-new-gr-c-s-check-loaded');
                });
              });
            `}
          </Script>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'