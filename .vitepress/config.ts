import { defineConfig } from 'vitepress';
import { buildSidebar } from './sidebar';

const WIKI_PORT: number = 47219;
const ROOT: string = process.cwd();
const EXCLUDED_FOLDERS: readonly string[] = ['node_modules'];

export default defineConfig({
  title: 'coentrify',
  description: 'Humans direct. Systems check. Agents work.',
  srcExclude: EXCLUDED_FOLDERS.map((folder: string): string => `**/${folder}/**`),
  rewrites: {
    'README.md': 'index.md',
  },
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    sidebar: buildSidebar(ROOT, EXCLUDED_FOLDERS),
    search: {
      provider: 'local',
    },
  },
  vite: {
    server: {
      port: WIKI_PORT,
      strictPort: true,
      headers: {
        'Cache-Control': 'no-store',
      },
    },
  },
});
