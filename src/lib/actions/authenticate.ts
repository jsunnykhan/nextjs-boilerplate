'use server';
import { signIn } from '@/auth';

export async function credentialsSigning(formData: FormData) {
  return await signIn('credentials', formData);
}
