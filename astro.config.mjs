import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
	integrations: [react(), partytown()],
	site: 'adityabhattacharya.github.io',
})
