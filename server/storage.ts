import { db } from "./db";
import {
  contactMessages,
  newsletterSubs,
  type InsertContactMessage,
  type InsertNewsletterSub,
  type ContactMessage,
  type NewsletterSub
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  createNewsletterSub(sub: InsertNewsletterSub): Promise<NewsletterSub>;
  getNewsletterSub(email: string): Promise<NewsletterSub | undefined>;
}

export class DatabaseStorage implements IStorage {
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [result] = await db.insert(contactMessages).values(message).returning();
    return result;
  }

  async createNewsletterSub(sub: InsertNewsletterSub): Promise<NewsletterSub> {
    const [result] = await db.insert(newsletterSubs).values(sub).returning();
    return result;
  }

  async getNewsletterSub(email: string): Promise<NewsletterSub | undefined> {
    const [result] = await db.select().from(newsletterSubs).where(eq(newsletterSubs.email, email));
    return result;
  }
}

export const storage = new DatabaseStorage();
