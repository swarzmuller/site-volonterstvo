// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
// };
//
// export default nextConfig;


  import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  i18n: {
    locales: ['en', 'ua'], // List your supported locales
    defaultLocale: 'en',         // Default locale
  },
};

export default withNextIntl(nextConfig);
