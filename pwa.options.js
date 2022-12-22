export default {
  icon: {
    fileName: 'icon_512.png',
  },
  workboxOptions: {
    cacheId: process.env.APP_NAME,
    directoryIndex: '/',
    nuxtAssetsRuntime: true, // Add the option in defaults. Default to true
    offline: true,
    offlinePage: null,
    offlineAssets: [],
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 10,
          },
        },
      },
    ],
  },
  manifest: {
    name: process.env.APP_NAME,
    short_name: process.env.APP_NAME,
    description: process.env.APP_META_DESCRIPTION,
    theme_color: '#00345d',
    background_color: '#ffffff',
    display: 'standalone',
    start_url: '/',
    lang: 'es_ES',
    orientation: 'portrait',
    scope: '/',
  },
}
