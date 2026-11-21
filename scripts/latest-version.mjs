import { readdirSync } from 'node:fs';

const CHANGELOG_FOLDER = 'changelog';
const VERSION_PAGE = /^(\d+)\.(\d+)\.(\d+)\.md$/;

export function latestVersion() {
  const versions = readdirSync(CHANGELOG_FOLDER)
    .map((file) => file.match(VERSION_PAGE))
    .filter((match) => match !== null)
    .map((match) => match.slice(1).map(Number))
    .sort((first, second) => second[0] - first[0] || second[1] - first[1] || second[2] - first[2]);
  return versions.length === 0 ? undefined : versions[0].join('.');
}

export function versionPage(version) {
  return `${CHANGELOG_FOLDER}/${version}.md`;
}
