import { makeItemHandlers } from "@/lib/crud-factory";
import { projectSchema } from "@/lib/schemas/cms";
import { projectStore } from "@/lib/cms/stores";

const config = { schema: projectSchema, ...projectStore };

export const { GET, PATCH, DELETE } = makeItemHandlers(config);
