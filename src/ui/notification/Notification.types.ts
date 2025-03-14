export type NotificationType = 'birthday' | 'message' | 'approval';

export type NotificationProps = {
  type: NotificationType;
  text: string;
  link?: string;
  person?: {
    name: string;
    link: string;
  };
  unread?: boolean;
};

type Notification = NotificationProps & { id: string };

export type NotificationGroup = {
  id: string;
  title: string;
  items: Notification[];
};
