type TeamMember = {
  id: number;
  name?: string;
  position: string;
  level?: string;
  date?: Date | string;
  skills?: string[];
};

export type TeamDetail = {
  id: string;
  name: string;
  description: string;
  tags: string[];
  owner: {
    id: number;
    avatar: string;
    name: string;
    position: string;
  };
  members: TeamMember[];
};

export type TeamDetailResponse = {
  data: TeamDetail;
  meta: null;
};

export type TeamListResponse = {
  data: TeamDetail[];
  meta: null;
};
