import { defineConfig } from 'vitepress';
import { buildSidebar } from './sidebar';
import { sidebarRefresh } from './sidebar-refresh';

const WIKI_PORT: number = 47219;
const WIKI_BASE: string = process.env.WIKI_BASE ?? '/';
const ROOT: string = process.cwd();
const EXCLUDED_FOLDERS: readonly string[] = ['node_modules'];
const PENDING_STANDARD_LINK: RegExp = /^\.\/[a-z0-9]+_[a-z0-9_]+$/;

export default defineConfig({
  title: 'coentrify',
  base: WIKI_BASE,
  description: 'Humans direct. Systems check. Agents work.',
  srcExclude: EXCLUDED_FOLDERS.map((folder: string): string => `**/${folder}/**`),
  rewrites: {
    'README.md': 'index.md',
  },
  cleanUrls: true,
  ignoreDeadLinks: [PENDING_STANDARD_LINK],
  lastUpdated: true,
  themeConfig: {
    sidebar: buildSidebar(ROOT, EXCLUDED_FOLDERS),
    search: {
      provider: 'local',
    },
  },
  vite: {
    plugins: [sidebarRefresh(ROOT, EXCLUDED_FOLDERS)],
    server: {
      port: WIKI_PORT,
      strictPort: true,
      headers: {
        'Cache-Control': 'no-store',
      },
    },
  },
});
