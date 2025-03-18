import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: 'https://www.yourdomain.com/' });
  const writeStream = createWriteStream('./public/sitemap.xml');

  sitemap.pipe(writeStream);

  // Tambahkan URL secara manual
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  sitemap.write({ url: '/about', changefreq: 'weekly', priority: 0.8 });
  sitemap.write({ url: '/career', changefreq: 'weekly', priority: 0.8 });
  sitemap.write({ url: '/library', changefreq: 'weekly', priority: 0.8 });

  // Tutup stream
  sitemap.end();

  await streamToPromise(sitemap);
  console.log('Sitemap.xml generated in public folder');
};

generateSitemap();
