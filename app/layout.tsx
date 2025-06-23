
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luz Contabilidade - Anderson Oliveira | Contador Especialista',
  description: 'Abertura de empresa, escrita mensal, regularização fiscal e consultoria contábil com o contador Anderson Oliveira. Atendimento profissional e personalizado.',
  keywords: 'contador, contabilidade, abertura de empresa, escrita mensal, regularização fiscal, Salvador, Bahia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
