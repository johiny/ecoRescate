import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Conoce a tu amigo en peligro',
  description: 'Conoce a tu amigo en peligro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
