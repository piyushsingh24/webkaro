import {
  makeCollectionHandlers,
  makeItemHandlers,
} from "@/lib/crud-factory";
import { authorSchema } from "@/lib/schemas/cms";
import { authorStore } from "@/lib/cms/stores";

const config = { schema: authorSchema, ...authorStore };

export const { GET, POST } = makeCollectionHandlers(config);
