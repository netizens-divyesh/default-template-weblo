import { z } from 'zod';

/**
 * @ai-marker VALIDATION_SCHEMAS
 * Centralized validation schemas using Zod
 */

// Email validation
export const emailSchema = z.string()
  .min(1, 'Email is required')
  .email('Invalid email address');

// Password validation
export const passwordSchema = z.string()
  .min(6, 'Password must be at least 6 characters');

// Login form schema
export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});
export type LoginFormData = z.infer<typeof loginSchema>;

// Signup form schema
export const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});
export type SignupFormData = z.infer<typeof signupSchema>;

// Contact form schema
export const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: emailSchema,
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});
export type ContactFormData = z.infer<typeof contactSchema>;

// Newsletter subscription schema
export const newsletterSchema = z.object({
  email: emailSchema,
});
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
