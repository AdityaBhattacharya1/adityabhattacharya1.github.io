import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import partytown from '@astrojs/partytown'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	integrations: [react(), partytown(), sitemap()],
	site: 'https://adityabh.is-a.dev',
})
