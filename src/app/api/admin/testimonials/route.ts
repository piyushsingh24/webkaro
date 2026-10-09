import {
  makeCollectionHandlers,
  makeItemHandlers,
} from "@/lib/crud-factory";
import { testimonialSchema } from "@/lib/schemas/cms";
import { testimonialStore } from "@/lib/cms/stores";

const config = { schema: testimonialSchema, ...testimonialStore };

export const { GET, POST } = makeCollectionHandlers(config);
