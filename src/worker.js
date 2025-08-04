export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Handle an API route
    if (url.pathname === "/api/hello") {
      return new Response(JSON.stringify({ message: "Hello from Worker!" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // Otherwise, serve static file from dist/
    return env.ASSETS.fetch(request);
  },
};