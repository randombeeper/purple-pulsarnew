import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightDocSearch from '@astrojs/starlight-docsearch';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: 'https://randombeeper.github.io/',
	base: 'purple-pulsar',
	trailingSlash: 'never',
	integrations: [
		starlight({
			title: 'James Astro Testing',
			social: {
				github: 'https://randombeeper.github.io',
				discord: 'https://alg.li/discord',
			},
			pagefind:false,
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			plugins: [
				starlightDocSearch({
				  appId: '82VLS1TU5K',
				  apiKey: 'bfdc9eff848b16b6167efaa4a84d5e27',
				  indexName: 'fontawesome',
				}),
			  ],
		}),
		sitemap()
	],
});
