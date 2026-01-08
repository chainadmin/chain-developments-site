import { z } from 'zod';
import { insertContactSchema, insertNewsletterSchema, contactMessages, newsletterSubs } from './schema';

// ============================================
// SHARED ERROR SCHEMAS
// ============================================
export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  internal: z.object({
    message: z.string(),
  }),
  conflict: z.object({
    message: z.string(),
  }),
};

// ============================================
// API CONTRACT
// ============================================
export const api = {
  contact: {
    submit: {
      method: 'POST' as const,
      path: '/api/contact',
      input: insertContactSchema,
      responses: {
        201: z.custom<typeof contactMessages.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
  newsletter: {
    subscribe: {
      method: 'POST' as const,
      path: '/api/newsletter',
      input: insertNewsletterSchema,
      responses: {
        201: z.custom<typeof newsletterSubs.$inferSelect>(),
        400: errorSchemas.validation,
        409: errorSchemas.conflict,
      },
    },
  },
};

// ============================================
// TYPE HELPERS
// ============================================
export type ContactInput = z.infer<typeof api.contact.submit.input>;
export type NewsletterInput = z.infer<typeof api.newsletter.subscribe.input>;
