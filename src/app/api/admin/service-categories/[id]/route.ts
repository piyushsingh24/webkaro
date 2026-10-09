import { makeItemHandlers } from "@/lib/crud-factory";
import { z } from "zod";
import { serviceCategoryStore } from "@/lib/cms/stores";
import { blogCategorySchema } from "@/lib/schemas/cms";

const serviceCategorySchema = z.object({
  name: blogCategorySchema.shape.name,
  slug: blogCategorySchema.shape.slug,
  description: blogCategorySchema.shape.description,
  sortOrder: blogCategorySchema.shape.sortOrder,
});

const config = { schema: serviceCategorySchema, ...serviceCategoryStore };

export const { GET, PATCH, DELETE } = makeItemHandlers(config);
