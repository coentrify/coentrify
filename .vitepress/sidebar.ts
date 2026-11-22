import { readdirSync, readFileSync } from 'node:fs';
import type { Dirent } from 'node:fs';
import { join } from 'node:path';
import type { DefaultTheme } from 'vitepress';

const MARKDOWN_EXTENSION: string = '.md';
const HOME_PAGE: string = 'readme.md';
const ROOT_PAGE_ORDER: readonly string[] = [
  HOME_PAGE,
  'philosophy.md',
  'standards.md',
  'how-it-works.md',
  'directing.md',
  'onboarding.md',
  'recommendations.md',
  'coentrify-json.md',
  'commands.md',
  'origin.md',
];
const FOLDER_PAGE_ORDER: readonly string[] = ['overview.md'];
const NEWEST_FIRST_FOLDERS: readonly string[] = ['changelog'];
const TITLE_PATTERN: RegExp = /^# (.+)$/m;
const FOLDER_TITLES: Readonly<Record<string, string>> = {
  ai: 'AI',
  e2e: 'E2E',
  ui: 'UI',
  typescript: 'TypeScript',
};

type RankedPage = { rank: number; text: string; link: string };

function pageTitle(filePath: string, fallback: string): string {
  const match: RegExpMatchArray | null = readFileSync(filePath, 'utf8').match(TITLE_PATTERN);
  return match ? match[1].trim() : fallback;
}

function folderTitle(name: string): string {
  if (FOLDER_TITLES[name]) {
    return FOLDER_TITLES[name];
  }
  return name
    .split('-')
    .map((word: string): string => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function pageRank(name: string, order: readonly string[]): number {
  const rank: number = order.indexOf(name);
  return rank === -1 ? order.length : rank;
}

function pageLink(relativePath: string): string {
  if (relativePath === HOME_PAGE) {
    return '/';
  }
  return `/${relativePath.slice(0, -MARKDOWN_EXTENSION.length)}`;
}

function folderItems(
  root: string,
  relativeFolder: string,
  excluded: readonly string[],
): DefaultTheme.SidebarItem[] {
  const entries: Dirent[] = readdirSync(join(root, relativeFolder), { withFileTypes: true }).filter(
    (entry: Dirent): boolean => !entry.name.startsWith('.') && !excluded.includes(entry.name),
  );

  const order: readonly string[] = relativeFolder === '' ? ROOT_PAGE_ORDER : FOLDER_PAGE_ORDER;
  const newestFirst: boolean = NEWEST_FIRST_FOLDERS.includes(relativeFolder);

  const pages: DefaultTheme.SidebarItem[] = entries
    .filter((entry: Dirent): boolean => entry.isFile() && entry.name.endsWith(MARKDOWN_EXTENSION))
    .map((entry: Dirent): RankedPage => {
      const relativePath: string = join(relativeFolder, entry.name);
      return {
        rank: pageRank(entry.name, order),
        text: pageTitle(join(root, relativePath), entry.name),
        link: pageLink(relativePath),
      };
    })
    .sort(
      (a: RankedPage, b: RankedPage): number =>
        a.rank - b.rank ||
        (newestFirst
          ? b.text.localeCompare(a.text, undefined, { numeric: true })
          : a.text.localeCompare(b.text)),
    )
    .map(({ text, link }: RankedPage): DefaultTheme.SidebarItem => ({ text, link }));

  const groups: DefaultTheme.SidebarItem[] = entries
    .filter((entry: Dirent): boolean => entry.isDirectory())
    .sort((a: Dirent, b: Dirent): number => a.name.localeCompare(b.name))
    .map(
      (entry: Dirent): DefaultTheme.SidebarItem => ({
        text: folderTitle(entry.name),
        collapsed: true,
        items: folderItems(root, join(relativeFolder, entry.name), excluded),
      }),
    )
    .filter((group: DefaultTheme.SidebarItem): boolean => (group.items?.length ?? 0) > 0);

  return [...pages, ...groups];
}

export function buildSidebar(root: string, excluded: readonly string[]): DefaultTheme.SidebarItem[] {
  return folderItems(root, '', excluded);
}
