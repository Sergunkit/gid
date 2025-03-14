import * as React from 'react';

import { useUpdateMeAvatar } from '@/api';
import { Avatar } from '@/ui';

type ProfileAvatarProps = {
  name: string;
  id?: number;
  src?: string;
  editable?: boolean;
};

export function ProfileAvatar({ id, name, src, editable }: ProfileAvatarProps) {
  const { mutate, isPending } = useUpdateMeAvatar(id);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return;
    }

    const file = event.target.files[0];

    mutate(file);
  }

  if (editable) {
    return (
      <label>
        <Avatar
          size="large"
          src={src}
          name={name}
          loading={isPending}
          editable
        />
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={handleChange}
        />
      </label>
    );
  }

  return (
    <Avatar
      size="large"
      src={src}
      name={name}
      loading={isPending}
    />
  );
}
