/**
 * Возвращает название часового пояса и текущую дату
 * в данном часовом поясе.
 *
 * @param zone - Часовой пояс.
 */
export function getZoneTime(zone?: string) {
  if (!zone) {
    return '';
  }

  const TIMEZONE_RE = /([0-9:]+)\s+(.*),(.*)/g;
  const date = new Date();
  const result = new Intl.DateTimeFormat('ru-RU', {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: zone,
    timeZoneName: 'long',
  }).format(date);

  return result.replace(TIMEZONE_RE, '$2, $1');
}
