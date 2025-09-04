import { defineConfig } from 'astro/config';
import path from 'path';

export default defineConfig({
  output: 'static',
  base: '/',
  alias: {
    '@layouts': path.resolve('./src/layouts'),
  },
});
