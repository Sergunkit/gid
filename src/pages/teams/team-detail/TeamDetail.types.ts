import type { Role } from '@/api';
import type { Skill } from '@/api';

export type Application = {
  createdAt: string;
  deadline?: string;
  id: number;
  quantity: number;
  skills: Skill[];
  status: string;
  structureRole: Role;
};
