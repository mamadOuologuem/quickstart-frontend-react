/**
 * Contains the application's different routes (pages)
 * Page's seo's fields (used in src/layouts/Seo.js can be set in this file)
 * Seo exemple { title: '', description: '', lang: '', meta: [{ property: 'og:title', content: metaTitle }] }
 */
export const routes = {
  NotFound: {
    url: '/404',
    component: 'src/pages/404.js',
    seo: { title: 'Not found', description: 'Page Not found' },
  },
  HomePage: {
    url: '/',
    component: 'src/pages/index.js',
    seo: { title: 'Home page', description: 'My home page description' },
  },
};

export const getPageUrl = (routeId) => routes[routeId] && routes[routeId].url;

export const getPageSeo = (routeId) => routes[routeId] && (routes[routeId].seo || {});
