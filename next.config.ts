import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    experimental: {
        optimizeRouterScrolling: true,
    }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);