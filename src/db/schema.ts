import { pgTable, varchar, integer, numeric, date, timestamp } from "drizzle-orm/pg-core";

// Product table
export const product = pgTable("products", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    name: varchar("name", { length: 255 }).notNull(),
    description: varchar("description", { length: 1024 }),
    price: numeric("price", { precision: 10, scale: 2 }).notNull(),
    stock: integer("stock").notNull().default(0), // Quantity in stock
    createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Order table
export const order = pgTable("orders", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    userId: integer("user_id").notNull(), // Assuming there's a users table with user IDs
    orderDate: date("order_date").defaultNow().notNull(),
    totalAmount: numeric("total_amount", { precision: 10, scale: 2 }).notNull(),
    status: varchar("status", { length: 50 }).default("pending").notNull(), // E.g., "pending", "completed", "shipped"
});

// Order Items table to track products within an order
export const orderItem = pgTable("order_items", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    orderId: integer("order_id").references(() => order.id).notNull(),
    productId: integer("product_id").references(() => product.id).notNull(),
    quantity: integer("quantity").notNull().default(1),
    priceAtPurchase: numeric("price_at_purchase", { precision: 10, scale: 2 }).notNull(), // Price of the product at the time of order
});
