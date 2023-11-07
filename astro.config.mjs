import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';
import NetlifyCMS from "astro-netlify-cms";

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [
        mdx(),
        sitemap(),
        NetlifyCMS({
            config: {
                backend: {
                    name: 'git-gateway',
                    branch: 'main',
                },
                collections: [
                    {
                        name: 'news',
                        label: 'News Posts',
                        folder: 'src/content/news',
                        create: true,
                        delete: true,
                        slug: "{{year}}/{{month}}/{{title}}",
                        fields: [
                            {label: 'Title', name: 'title', widget: 'string'},
                            {label: 'Description', name: 'description', widget: 'string'},
                            {label: 'Publish Date', name: 'pubDate', widget: 'datetime'},
                            {label: 'Hero Image', name: 'heroImage', widget: 'image'},
                            {label: 'Body', name: 'body', widget: 'markdown'},
                        ],
                    },
                ],
            },
        }),
    ],
});
