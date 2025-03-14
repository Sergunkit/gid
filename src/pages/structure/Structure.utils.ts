import type { StructureContent, StructureListItem } from '@/api';

export function getSubMembers(items: StructureContent[]) {
  let data: StructureListItem[] = [];

  for (let item of items) {
    if (item.members) {
      data.push(...item.members);
    }
    if (item.children) {
      const children = item.children;

      data.push(...getSubMembers(children));
    }
  }

  return data;
}
