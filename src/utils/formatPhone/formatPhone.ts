/**
 * Возвращает отформатированный телефонный номер.
 *
 * @param source - Телефонный номер.
 */
export function formatPhone(source = '') {
  const phone = source?.replace(/^8/, '7').replace(/\D+/, '');
  const PHONE_RE = /^(\d)(\d+)(\d\d\d)(\d\d)(\d\d)$/;

  if (!phone || phone.length < 11) {
    return phone;
  }

  return phone.replace(PHONE_RE, '+$1 ($2) $3-$4-$5');
}
