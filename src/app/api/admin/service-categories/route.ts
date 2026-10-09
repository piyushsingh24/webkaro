import {
  makeCollectionHandlers,
  makeItemHandlers,
} from "@/lib/crud-factory";
import { z } from "zod";
import { serviceCategoryStore } from "@/lib/cms/stores";
import { blogCategorySchema } from "@/lib/schemas/cms";

// Service categories share the blog-category shape minus hubSlug.
const serviceCategorySchema = z.object({
  name: blogCategorySchema.shape.name,
  slug: blogCategorySchema.shape.slug,
  description: blogCategorySchema.shape.description,
  sortOrder: blogCategorySchema.shape.sortOrder,
});

const config = { schema: serviceCategorySchema, ...serviceCategoryStore };

export const { GET, POST } = makeCollectionHandlers(config);
