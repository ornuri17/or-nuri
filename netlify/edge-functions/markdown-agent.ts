import type { Context } from "@netlify/edge-functions";
import { PROFILE_MARKDOWN } from "./profile-markdown.ts";

export default async function handler(
  request: Request,
  context: Context
): Promise<Response> {
  const accept = request.headers.get("accept") ?? "";
  if (!accept.includes("text/markdown")) {
    return context.next();
  }

  return new Response(PROFILE_MARKDOWN, {
    status: 200,
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "vary": "Accept",
      "cache-control": "public, max-age=3600",
    },
  });
}
