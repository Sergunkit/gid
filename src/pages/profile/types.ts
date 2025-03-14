import type { LeaveType } from '@/ui/leave/Leave.types';

type ProfileContacts = {
  email: string;
  phone: string;
  telegram: string;
};

type ProfileLeave = {
  id: number;
  type: LeaveType;
  reason: string;
  period: string;
};

type ProfileBackup = {
  id: number;
  name: string;
  avatar: string;
  position: string;
};

type ProfileOffice = {
  address: string;
  mode: string;
  days: number[];
};

type ProfileTeam = {
  id: number;
  name: string;
  description: string;
  tags: string[];
  role: string;
};

export type ProfileInfo = {
  id: string;
  name: string;
  description: string;
  status: string;
  avatar: string;
  timezone: string;
  birthday: string;
  skills: string[];
  leaves: ProfileLeave[];
  office: ProfileOffice;
  backup: ProfileBackup;
  contacts: ProfileContacts;
  teams: ProfileTeam[];
};
