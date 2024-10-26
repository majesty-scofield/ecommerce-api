import { createInsertSchema } from 'drizzle-zod';
import {product} from "../../db/schema";
export const createProductSchema = createInsertSchema(product).omit({
    id: true,
});

export const updateProductSchema = createInsertSchema(product).omit({
    id: true,
}).partial();
