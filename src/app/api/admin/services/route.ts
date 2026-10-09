import {
  makeCollectionHandlers,
  makeItemHandlers,
} from "@/lib/crud-factory";
import { serviceSchema } from "@/lib/schemas/cms";
import { serviceStore } from "@/lib/cms/stores";

const config = { schema: serviceSchema, ...serviceStore };

export const { GET, POST } = makeCollectionHandlers(config);
