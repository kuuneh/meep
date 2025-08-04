import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)

    // Route: serve profile like `/kuuneh`
    if (url.pathname.startsWith("/@")) {
      const username = url.pathname.slice(2)
      return new Response(`This would render profile for: ${username}`, {
        headers: { 'Content-Type': 'text/html' }
      })
    }

    // Default: serve static files from /dist
    try {
      return await getAssetFromKV({ request, waitUntil: ctx.waitUntil })
    } catch (err) {
      return new Response("404 Not Found", { status: 404 })
    }
  }
}