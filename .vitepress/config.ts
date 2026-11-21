import { defineConfig } from 'vitepress';
import { buildSidebar } from './sidebar';
import { sidebarRefresh } from './sidebar-refresh';

const WIKI_PORT: number = 47219;
const WIKI_BASE: string = process.env.WIKI_BASE ?? '/';
const ROOT: string = process.cwd();
const EXCLUDED_FOLDERS: readonly string[] = ['node_modules', 'npm'];
const EXCLUDED_PAGES: readonly string[] = ['CLAUDE.md'];
const SOURCE_URL: string = 'https://github.com/coentrify/coentrify';
const PACKAGE_URL: string = 'https://www.npmjs.com/package/coentrify';

export default defineConfig({
  title: 'coentrify',
  base: WIKI_BASE,
  description: 'Humans direct. Systems check. Agents work.',
  srcExclude: [
    ...EXCLUDED_FOLDERS.map((folder: string): string => `**/${folder}/**`),
    ...EXCLUDED_PAGES,
  ],
  rewrites: {
    'readme.md': 'index.md',
  },
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    sidebar: buildSidebar(ROOT, [...EXCLUDED_FOLDERS, ...EXCLUDED_PAGES]),
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: SOURCE_URL },
      { icon: 'npm', link: PACKAGE_URL },
    ],
  },
  vite: {
    plugins: [sidebarRefresh(ROOT, [...EXCLUDED_FOLDERS, ...EXCLUDED_PAGES])],
    server: {
      port: WIKI_PORT,
      strictPort: true,
      headers: {
        'Cache-Control': 'no-store',
      },
    },
  },
});
