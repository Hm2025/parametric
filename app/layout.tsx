import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const effra = localFont({
  src: [
    { path: '../Effra/Effra-Light.ttf', weight: '300', style: 'normal' },
    { path: '../Effra/Effra.ttf', weight: '400', style: 'normal' },
    { path: '../Effra/Effra-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../Effra/Effra-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../Effra/Effra-Heavy.ttf', weight: '900', style: 'normal' },
  ],
  variable: '--font-effra',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Parametric — Legal & Professional Services',
  description: 'A premium law firm providing corporate, dispute resolution, finance, and private client services.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${effra.variable} antialiased`}>
        <Header />
        <main className="pt-[6rem] lg:pt-[8rem]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
