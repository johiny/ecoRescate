import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import AuthProvider from '@/components/AuthProvider'
import UserMenu from '@/components/UserMenu'
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
    <AuthProvider>
        <Navbar/>
        {children}
        <UserMenu/>
    </AuthProvider>
        </body>
    </html>
  )
}
