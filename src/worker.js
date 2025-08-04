export default {
  async fetch(request, env, ctx) {
    // Automatically serve files from your dist folder
    return env.ASSETS.fetch(request);
  },
};