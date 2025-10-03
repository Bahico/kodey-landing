import {getAxios} from "../../../api/api.functions";

export const getServerSideProps = async ({ res }) => {
    const posts = await getAxios('cases'); // DB yoki API'dan olingan postlar

    const baseUrl = "https://kodey.uz";
    const urls = posts
        .map(post => `<url><loc>${baseUrl}/posts/${post._id}</loc></url>`)
        .join("");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return { props: {} };
};
