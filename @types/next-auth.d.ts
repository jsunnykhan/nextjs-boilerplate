import 'next-auth';

declare module 'next-auth' {
  interface User {
    name: string | null;
    email: string;
    token: string;
    refreshToken: string;
    tokenType: string;
  }

  interface Session {
    userId: string;
    user?: {
      name: string | null;
      email: string;
      sub: string;
      exp: number;
      id: string;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    name: string | null;
    email: string;
    token: string;
    refreshToken: string;
    tokenType: string;
  }
}
