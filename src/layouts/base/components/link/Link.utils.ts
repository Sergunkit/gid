export function isActiveLink(url?: string, location?: string) {
  if (!url || !location) {
    return false;
  }

  if (url === '/' || location === '/') {
    return url === location;
  }

  return url.startsWith(location);
}
