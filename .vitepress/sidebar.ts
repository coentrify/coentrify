import { readdirSync, readFileSync } from 'node:fs';
import type { Dirent } from 'node:fs';
import { join } from 'node:path';
import type { DefaultTheme } from 'vitepress';

const MARKDOWN_EXTENSION: string = '.md';
const HOME_PAGE: string = 'README.md';
const ROOT_PAGE_ORDER: readonly string[] = [
  HOME_PAGE,
  'philosophy.md',
  'standards.md',
  'how-it-works.md',
  'onboarding.md',
  'recommendations.md',
  'lock-file.md',
  'commands.md',
  'origin.md',
];
const FOLDER_PAGE_ORDER: readonly string[] = ['overview.md'];
const TITLE_PATTERN: RegExp = /^# (.+)$/m;

function pageTitle(filePath: string, fallback: string): string {
  const match: RegExpMatchArray | null = readFileSync(filePath, 'utf8').match(TITLE_PATTERN);
  return match ? match[1].trim() : fallback;
}

function folderTitle(name: string): string {
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

  const pages: DefaultTheme.SidebarItem[] = entries
    .filter((entry: Dirent): boolean => entry.isFile() && entry.name.endsWith(MARKDOWN_EXTENSION))
    .sort(
      (a: Dirent, b: Dirent): number =>
        pageRank(a.name, order) - pageRank(b.name, order) || a.name.localeCompare(b.name),
    )
    .map((entry: Dirent): DefaultTheme.SidebarItem => {
      const relativePath: string = join(relativeFolder, entry.name);
      return {
        text: pageTitle(join(root, relativePath), entry.name),
        link: pageLink(relativePath),
      };
    });

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
