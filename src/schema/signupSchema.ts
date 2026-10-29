import { z } from 'zod';

const signUpSchema = z.object({
  firstName: z.string()
    .min(3, 'First name must be at least 3 characters')
    .max(20, 'First name cannot exceed 20 characters'),

  lastName: z.string()
    .min(3, 'Last name must be at least 3 characters')
    .max(20, 'Last name cannot exceed 20 characters'),

  email: z.string().email('Invalid email address').trim(),

  password: z.string()
    .min(8, 'Password must be at least 8 characters'),

  confirmPassword: z.string()
    .min(8, 'Please confirm your password'),
})
 .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
});
;

export default signUpSchema;