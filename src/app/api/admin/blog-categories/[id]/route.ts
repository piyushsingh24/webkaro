import { makeItemHandlers } from "@/lib/crud-factory";
import { blogCategorySchema } from "@/lib/schemas/cms";
import { blogCategoryStore } from "@/lib/cms/stores";

const config = { schema: blogCategorySchema, ...blogCategoryStore };

export const { GET, PATCH, DELETE } = makeItemHandlers(config);
