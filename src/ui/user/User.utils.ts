export function getBadgeColor(level?: string) {
  if (level === 'L1') {
    return 'orange';
  }

  if (level === 'L2') {
    return 'green';
  }

  if (level === 'L3') {
    return 'purple';
  }

  return 'blue';
}
