import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    experimental: {
        optimizeRouterScrolling: true,
    },
    compiler: {
        removeConsole: false,
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);