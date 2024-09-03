import { getServerSession, NextAuthOptions } from 'next-auth';

export const nextAuthOptions: NextAuthOptions = {
  providers: [],
  
};

export const getServerSideSession = async () =>
  await getServerSession(nextAuthOptions);
