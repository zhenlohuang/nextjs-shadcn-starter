import type { IConfig } from 'next-sitemap';

const config: IConfig = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true,
  // optional
  // robotsTxtOptions: {
  //   additionalSitemaps: [
  //     'https://example.com/server-sitemap.xml',
  //   ],
  // },
};

export default config;
