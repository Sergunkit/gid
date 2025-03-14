type NameObject = {
  firstName: string;
  lastName: string;
};

export function getFullName<T extends NameObject>(source?: T) {
  if (source?.firstName && source?.lastName) {
    return `${source?.firstName} ${source?.lastName}`;
  }

  return 'Пользователь';
}
