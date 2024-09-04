// import { AuthService } from '@/services/auth-service';
// import { NextAuthOptions, Session, User } from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import { TokenInfo } from './token';
// import { JWT } from 'next-auth/jwt';

// export const nextAuthOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Username', type: 'text' },
//         password: { label: 'Password', type: 'password' },
//         callbackUrl: { label: '', type: 'hidden' },
//       },
//       async authorize(credentials) {
//         const { email, password, callbackUrl } = credentials!;
//         try {
//           const apiService = new AuthService();
//           const response = await apiService.login({
//             email,
//             password,
//           });
//           console.log('res', response);
//           return response as any;
//         } catch (error: any) {
//           return null;
//         }
//       },
//     }),
//   ],

//   callbacks: {
//     async session({
//       session,
//       token,
//       user,
//     }: {
//       session: Session;
//       token: any | TokenInfo | JWT;
//       user: User;
//     }) {
//       const tokenInfo: TokenInfo = token as TokenInfo;
//       session.userId = tokenInfo.id;

//       // if (tokenInfo.claims.exp > localUnixEpoch()) {
//       //   if (token) {
//       //     session.user = token.claims;
//       //     session.access = token.access;
//       //     session.refresh = token.refresh;
//       //     session.error = token.error;
//       //     session.subdomain = token.subdomain;
//       //     session.userId = token.userId;
//       //   }
//       // } else {
//       //   const refreshTokenResponse = await refreshAccessToken(
//       //     token.refreshToken,
//       //     token.subdomain,
//       //     token.claims.id
//       //   );

//       //   Object.assign(token, refreshTokenResponse);
//       //   if (token) {
//       //     session.user = token.claims;
//       //     session.access = token.access;
//       //     session.refresh = token.refresh;
//       //     session.error = token.error;
//       //     session.subdomain = token.subdomain;
//       //     session.userId = token.userId;
//       //   }
//       // }

//       return session;
//     },

//     async jwt({ token, user, account }) {
//       return token;
//       const newToken: any = { ...token };

//       if (user && account) {
//         Object.assign(newToken, user);
//       }
//       if (Date.now() < newToken.claims.exp) {
//         return newToken;
//       }
//       // user = await refreshAccessToken(
//       //   newToken.refresh,
//       //   newToken.subdomain,
//       //   newToken.claims.id
//       // );
//       // Object.assign(newToken, user);
//       return newToken;
//     },

//     async signIn({ user, account, profile, email, credentials }) {
//       switch (account?.provider) {
//         case 'credentials': {
//           return true;
//         }
//         default:
//           return false;
//       }
//     },

//     async redirect({ url, baseUrl }) {
//       return url.startsWith(baseUrl) ? url : baseUrl;
//     },
//   },
//   pages: {
//     signIn: '/login',
//   },
// };

// // export const getServerSideSession = async () =>
// //   await getServerSession(nextAuthOptions);
