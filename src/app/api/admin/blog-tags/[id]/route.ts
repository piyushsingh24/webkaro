import { makeItemHandlers } from "@/lib/crud-factory";
import { blogTagSchema } from "@/lib/schemas/cms";
import { blogTagStore } from "@/lib/cms/stores";

const config = { schema: blogTagSchema, ...blogTagStore };

export const { GET, PATCH, DELETE } = makeItemHandlers(config);
