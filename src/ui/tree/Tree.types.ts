export type TreeEntry = {
  children: TreeEntry[] | null;
  id: number;
  level: number;
  name: string;
  priority: number;
  count?: number;
};
