import type { StructureContent, StructureListItem } from '@/api';

export function getSubMembers(items: StructureContent[]): StructureListItem[] {
  let data: StructureListItem[] = [];

  for (let item of items) {
    if (item.members) {
      data.push(...item.members);
    }

    if (item.children) {
      data.push(...getSubMembers(item.children));
    }
  }

  return data;
}
