import {
  pgTable,
  serial,
  text,
  integer,
  boolean,
  timestamp,
  json,
  jsonb,
  varchar,
  real,
  index,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  passwordHash: text("password_hash"),
  name: text("name"),
  bio: text("bio"),
  avatar: text("avatar"),
  role: varchar("role", { length: 50 }).default("user"), // user, admin
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Services categories
export const serviceCategories = pgTable("service_categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  icon: text("icon"),
  order: integer("order").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Services
export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  categoryId: integer("category_id")
    .references(() => serviceCategories.id)
    .notNull(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  longDescription: text("long_description"),
  price: text("price"),
  features: json("features").$type<string[]>(),
  icon: text("icon"),
  image: text("image"),
  order: integer("order").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Portfolio items
export const portfolioItems = pgTable("portfolio_items", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  category: text("category"),
  technologies: json("technologies").$type<string[]>(),
  image: text("image"),
  liveUrl: text("live_url"),
  githubUrl: text("github_url"),
  results: text("results"),
  order: integer("order").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Blog posts
export const blogPosts = pgTable(
  "blog_posts",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    slug: text("slug").notNull().unique(),
    excerpt: text("excerpt"),
    content: text("content").notNull(),
    featuredImage: text("featured_image"),
    category: text("category"),
    tags: json("tags").$type<string[]>(),
    metaTitle: text("meta_title"),
    metaDescription: text("meta_description"),
    published: boolean("published").default(false),
    scheduledAt: timestamp("scheduled_at"),
    publishedAt: timestamp("published_at"),
    authorId: integer("author_id")
      .references(() => users.id)
      .notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    index("blog_posts_published_idx").on(table.published),
    index("blog_posts_published_at_idx").on(table.publishedAt),
  ]
);

// Testimonials
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  clientName: text("client_name").notNull(),
  clientCompany: text("client_company"),
  clientAvatar: text("client_avatar"),
  content: text("content").notNull(),
  rating: integer("rating").default(5),
  projectType: text("project_type"),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Site settings
export const siteSettings = pgTable("site_settings", {
  id: serial("id").primaryKey(),
  key: text("key").notNull().unique(),
  value: jsonb("value"),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Contact form submissions
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  service: text("service"),
  message: text("message").notNull(),
  status: varchar("status", { length: 50 }).default("new"), // new, replied, closed
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Analytics (simple page view tracking)
export const pageViews = pgTable(
  "page_views",
  {
    id: serial("id").primaryKey(),
    path: text("path").notNull(),
    referrer: text("referrer"),
    userAgent: text("user_agent"),
    ip: text("ip"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [index("page_views_created_at_idx").on(table.createdAt)]
);

// AI Chat conversations (for chatbot)
export const chatConversations = pgTable("chat_conversations", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  messages: json("messages").$type<{ role: string; content: string }[]>(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type ServiceCategory = typeof serviceCategories.$inferSelect;
export type Service = typeof services.$inferSelect;
export type PortfolioItem = typeof portfolioItems.$inferSelect;
export type BlogPost = typeof blogPosts.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;
export type SiteSetting = typeof siteSettings.$inferSelect;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type PageView = typeof pageViews.$inferSelect;
export type ChatConversation = typeof chatConversations.$inferSelect;