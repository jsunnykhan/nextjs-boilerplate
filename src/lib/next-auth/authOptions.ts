import { getServerSession, NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials, req) {
        console.log("sdas -----------" ,credentials , req)
        const jsonRes =await  fetch(process.env.API_BASE_URl+'/api/v1/login' , {
          body: JSON.stringify({
            email : credentials?.email,
            password : credentials?.password
          })
        })

        const response = await jsonRes.json()

        if(response.ok){
          return response
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
  pages: {
    signIn: '/signin',
    signOut: '/signout',
  },
};

export const getServerSideSession = async () =>
  await getServerSession(nextAuthOptions);
