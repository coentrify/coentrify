import type { DefaultTheme, Plugin, SiteConfig } from 'vitepress';
import { buildSidebar } from './sidebar';

const MARKDOWN_EXTENSION: string = '.md';
const SITE_DATA_MODULE: string = '/@siteData';
const SETTLE_MILLISECONDS: number = 300;
const WATCHED_EVENTS: readonly string[] = ['add', 'unlink', 'change'];

type ConfigWithSite = { vitepress: SiteConfig<DefaultTheme.Config> };

export function sidebarRefresh(root: string, excluded: readonly string[]): Plugin {
  let siteConfig: SiteConfig<DefaultTheme.Config> | undefined;

  return {
    name: 'coentrify-sidebar-refresh',
    configResolved(config): void {
      siteConfig = (config as unknown as ConfigWithSite).vitepress;
    },
    configureServer(server): void {
      let timer: NodeJS.Timeout | undefined;

      const refresh = (): void => {
        if (!siteConfig) {
          return;
        }
        const themeConfig: DefaultTheme.Config = siteConfig.site.themeConfig;
        const sidebar: DefaultTheme.SidebarItem[] = buildSidebar(root, excluded);
        if (JSON.stringify(sidebar) === JSON.stringify(themeConfig.sidebar)) {
          return;
        }
        themeConfig.sidebar = sidebar;
        const siteData = server.moduleGraph.getModuleById(SITE_DATA_MODULE);
        if (siteData) {
          server.moduleGraph.invalidateModule(siteData);
        }
        server.ws.send({ type: 'full-reload' });
      };

      server.watcher.on('all', (event: string, file: string): void => {
        if (!WATCHED_EVENTS.includes(event) || !file.endsWith(MARKDOWN_EXTENSION)) {
          return;
        }
        clearTimeout(timer);
        timer = setTimeout(refresh, SETTLE_MILLISECONDS);
      });
    },
  };
}
