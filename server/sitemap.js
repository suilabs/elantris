import sitemapGen from 'sitemap';

import ProjectService from '../src/Services/ProjectService';

const generateSiteMap = (host, projects) => {
  const sm = sitemapGen.createSitemap({
    hostname: 'https://suilabs.com',
    cacheTime: 604800000, // one week period
    urls: [
      {
        url: '/design',
        changefreq: 'monthly',
        links: [
          { lang: 'en', url: '/en/design' },
          { lang: 'ca', url: '/ca/design' },
          { lang: 'es', url: '/es/design' },
        ],
      },
      {
        url: '/software',
        changefreq: 'monthly',
        links: [
          { lang: 'en', url: '/en/software' },
          { lang: 'ca', url: '/ca/software' },
          { lang: 'es', url: '/es/software' },
        ],
      },
      {
        url: '/about',
        changefreq: 'monthly',
        links: [
          { lang: 'en', url: '/en/about' },
          { lang: 'ca', url: '/ca/about' },
          { lang: 'es', url: '/es/about' },
        ],
      },
      ...projects.map((project) => {
        const url = `/${project.section.name.toLowerCase()}/${project.url}`;
        return {
          url,
          changefreq: 'weekly',
          links: [
            ...project.languages.map(lang => ({
              lang,
              url: `/${lang}${url}`,
            })),
          ],
        };
      }),
    ],
  });
  return sm.toString();
};

const sitemap = (req, res) => {
  ProjectService.getProjects()
    .then((projects) => {
      res.set('Content-Type', 'application/xhtml+xml');
      res.send(generateSiteMap(req.hostname, projects));
    });
};

export default sitemap;
