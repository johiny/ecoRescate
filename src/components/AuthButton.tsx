'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
const AuthButton = () => {
    const session = useSession()
  return (
    <div>
        {session.status == "authenticated" ? <span className='opacity-50 cursor-pointer hover:opacity-90 text-lg border-b-2 border-e-white' onClick={() => signOut()}>Salir</span>:
        <span className='opacity-50 cursor-pointer hover:opacity-90 text-lg border-b-2 border-e-white' onClick={() => signIn('auth0')}>Entrar</span>}
    </div>
  )
}

export default AuthButton