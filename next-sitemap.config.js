/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://paltrack.dev',
    generateRobotsTxt: true, // ✅ also generate /robots.txt
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 7000,
    exclude: ['/404'],
  };
  