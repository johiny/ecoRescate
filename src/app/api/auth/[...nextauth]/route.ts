//@ts-nocheck
import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0";

export const authOptions = {
   // @ts-ignore workaround for next-auth error me estaba dando un error muy raro en build time
  providers: [
    Auth0Provider({
        clientId: process.env.AUTH0_CLIENT_ID || '',
        clientSecret: process.env.AUTH0_CLIENT_SECRET || '',
        issuer: process.env.AUTH0_ISSUER
      }),
      
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }