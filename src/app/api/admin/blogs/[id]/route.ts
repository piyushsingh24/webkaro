import { makeItemHandlers } from "@/lib/crud-factory";
import { blogPostSchema } from "@/lib/schemas/cms";
import { postStore } from "@/lib/cms/stores";

const config = { schema: blogPostSchema, ...postStore };

export const { GET, PATCH, DELETE } = makeItemHandlers(config);
