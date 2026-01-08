import { pgTable, text, serial, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const newsletterSubs = pgTable("newsletter_subs", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  active: boolean("active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// === BASE SCHEMAS ===
export const insertContactSchema = createInsertSchema(contactMessages).omit({ id: true, createdAt: true });
export const insertNewsletterSchema = createInsertSchema(newsletterSubs).omit({ id: true, active: true, createdAt: true });

// === EXPLICIT API CONTRACT TYPES ===
export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactSchema>;

export type NewsletterSub = typeof newsletterSubs.$inferSelect;
export type InsertNewsletterSub = z.infer<typeof insertNewsletterSchema>;

// Request types
export type CreateContactRequest = InsertContactMessage;
export type CreateNewsletterRequest = InsertNewsletterSub;

// Response types
export type ContactResponse = ContactMessage;
export type NewsletterResponse = NewsletterSub;
