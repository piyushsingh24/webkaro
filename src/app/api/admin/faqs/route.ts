import {
  makeCollectionHandlers,
  makeItemHandlers,
} from "@/lib/crud-factory";
import { faqSchema } from "@/lib/schemas/cms";
import { faqStore } from "@/lib/cms/stores";

const config = { schema: faqSchema, ...faqStore };

export const { GET, POST } = makeCollectionHandlers(config);
