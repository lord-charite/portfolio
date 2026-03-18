import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If your repo is named "portfolio", keep this as '/portfolio/'
// If your repo is named "lord-charite.github.io", change to '/'
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
