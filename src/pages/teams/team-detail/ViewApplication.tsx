import { Definition, Modal, Pills } from '@/ui';

import type { Application } from './TeamDetail.types';

type FormApplicationProps = {
  application?: Application;
  team: string;
  opened: boolean;
  onClose: () => void;
  onClosed: () => void;
};

/**
 * Компонент `ViewApplication` отображает модальное окно
 * с базовой информацией заявки в команду.
 */
export function ViewApplication({
  application,
  team,
  opened,
  onClose,
  onClosed,
}: FormApplicationProps) {
  return (
    <Modal
      title={`Заявка в команду ${team}`}
      opened={opened}
      onClose={onClose}
      onClosed={onClosed}
    >
      <div className="team-application-details">
        <Definition
          label="Должность:"
          value={application?.structureRole.name}
        />
        {!!application?.skills.length && (
          <Definition
            label="Навыки:"
            value={<Pills value={application?.skills} />}
          />
        )}
        {application?.deadline && (
          <Definition
            label="Дата выхода:"
            value={application?.deadline}
          />
        )}
      </div>
    </Modal>
  );
}
