import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

export default {
  async fetch(request, env, ctx) {
    try {
      const response = await getAssetFromKV(event, {
        // Optional: customize options here if needed
      });
      return response;
    } catch (e) {
      return new Response(`Error fetching asset: ${e.message}`, { status: 500 });
    }
  }
};