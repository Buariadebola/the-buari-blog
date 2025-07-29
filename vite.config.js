import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` (development, production, etc.)
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH || '/the-buari-blog',
  }
})
