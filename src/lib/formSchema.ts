import { z } from 'zod';

export const LoginFormDataSchema = z.object({
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z.string().min(4, 'Password is required'),
})

export const RegistrationFormDataSchema = z.object({
  fullName: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }).min(1, { message: 'Email is required' }),
  zipCode: z.string().min(4, { message: 'Zip Code is required' }),
  password: z.string().min(6, { message: 'Password is required' }),
  confirmPassword: z.string().min(6, { message: 'Confirm Password is required' }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});