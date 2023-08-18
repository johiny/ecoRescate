import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import AuthProvider from '@/components/AuthProvider'
import UserMenu from '@/components/UserMenu'
import { getServerSession } from 'next-auth'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import AppContext from '@/components/AppContext'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BioRescate',
  description: 'Conoce a tu amigo en peligro',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="es">
      <body className={inter.className}>
    <AuthProvider>
      <AppContext>
        <Navbar/>
        {children}
        { session?.user &&  <UserMenu/>}
      </AppContext>
    </AuthProvider>
        </body>
    </html>
  )
}
