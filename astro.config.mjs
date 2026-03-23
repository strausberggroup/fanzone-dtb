// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	site: 'https://fanzone.dtnbur.com',
	output: 'static',
	adapter: cloudflare(),
});
