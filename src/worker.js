import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  const request = event.request;
  const url = new URL(request.url);
  const path = url.pathname;
  const hostname = url.hostname;

  const BASE_DOMAIN = 'meep.wtf'; // replace with your actual domain
  const BACKEND_HOST = 'your.backend.ip.or.domain'; // e.g. 123.123.123.123 or backend.yourdomain.com
  const BACKEND_PORT = '8000';

  // Extract subdomain
  const isSubdomain = hostname !== BASE_DOMAIN && hostname.endsWith(`.${BASE_DOMAIN}`);
  const subdomain = isSubdomain ? hostname.replace(`.${BASE_DOMAIN}`, '') : null;

  // ✅ 1. Proxy API requests to your Django backend
  if (path.startsWith('/api/')) {
    const apiUrl = `http://${BACKEND_HOST}:${BACKEND_PORT}${path}`;
    return fetch(apiUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });
  }

  // ✅ 2. Proxy subdomains like username.yourdomain.com
  if (subdomain && subdomain !== 'www') {
    const publicUrl = `http://${BACKEND_HOST}:${BACKEND_PORT}/public/${subdomain}`;
    return fetch(publicUrl, {
      method: request.method,
      headers: request.headers,
    });
  }

  // ✅ 3. Serve static assets (default behavior)
  try {
    return await getAssetFromKV(event);
  } catch (e) {
    return new Response(`Error fetching asset: ${e.message}`, { status: 500 });
  }
}