'use server';
import { signIn } from '@/lib/next-auth/auth';

export async function credentialsSigning(formData: FormData) {
  return await signIn('credentials', formData);
}
