import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter, OurFileRouter } from "./core";

export const { GET, POST } = createRouteHandler({
    router: ourFileRouter,
});