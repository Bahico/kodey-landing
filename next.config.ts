import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    experimental: {
        optimizeRouterScrolling: true,
    },
    images: {
        domains: ['api.kodey.ru']
    }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);