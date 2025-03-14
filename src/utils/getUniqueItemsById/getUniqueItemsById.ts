export function getUniqueItemsById<T extends { id: number }>(items: T[]) {
  return items.filter((obj, index, self) => {
    return self.findIndex(t => t.id === obj.id) === index;
  });
}
