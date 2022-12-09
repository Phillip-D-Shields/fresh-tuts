import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req) {
    const uuid = crypto.randomUUID();
    return new Response(JSON.stringify(uuid), {
      headers: { "Content-Type": "application/json" },
    });
  },
};

export default function randomUUID() {
  return {
    handler,
    path: "/api/random-uuid",
  };
}