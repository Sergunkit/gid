

import avatar from '../../assets/avatar.svg';

export type Skill = {
    id: number;
    name: string;
  };

export type UsersItemWorkInfo = {
  office: string;
  position: string;
  status: string;
};

export type UsersItem = {
    avatar: string;
    city: string;
    email?: string;
    firstName: string;
    id: number;
    lastName: string;
    middleName: string;
    phone?: string;
    skills: Skill[];
    telegram?: string;
    timezone: string;
    workInfo: UsersItemWorkInfo;
  };
  

export const User: UsersItem[] = [
  {
    avatar: avatar,
    city: 'Москва',
    email: 'iivanov@example.com',
    firstName: 'Иван',
    id: 1,
    lastName: 'Иванов',
    middleName: 'Иванович',
    phone: '+7 (999) 999-99-99',
    skills: [
      {
        id: 2,
        name: 'Python',
      },
      {
        id: 6,
        name: 'Docker',
      },
      {
        id: 8,
        name: 'DevOps',
      },
    ],
    telegram: '@iivanovtg',
    timezone: 'Europe/Moscow',
    workInfo: {
      office: 'Ленинградский пр-т., 72 к 4, Москва',
      position: 'Senior Developer',
      status: 'В офисе',
    },
  },
  {
    avatar: avatar,
    city: 'Москва',
    email: 'asidorova@example.com',
    firstName: 'Анна',
    id: 2,
    lastName: 'Сидорова',
    middleName: 'Никифоровна',
    phone: '+7 (999) 999-99-99',
    skills: [
      {
        id: 7,
        name: 'Kubernetes',
      },
    ],
    telegram: '@asidorovatg',
    timezone: 'Europe/Moscow',
    workInfo: {
      office: 'Ленинградский пр-т., 72 к 4, Москва',
      position: 'Senior Developer',
      status: 'В офисе',
    },
  },
  {
    avatar: avatar,
    city: 'Москва',
    email: 'dvolkov@example.com',
    firstName: 'Дмитрий',
    id: 3,
    lastName: 'Волков',
    middleName: 'Ильич',
    phone: '+7 (999) 999-99-99',
    skills: [
      {
        id: 6,
        name: 'Docker',
      },
      {
        id: 8,
        name: 'DevOps',
      },
    ],
    telegram: '@dvolkovtg',
    timezone: 'Europe/Moscow',
    workInfo: {
      office: 'Ленинградский пр-т., 72 к 4, Москва',
      position: 'Senior Developer',
      status: 'В офисе',
    },
  },
];
