import { useDeleteRequirement } from '@/api';
import { Button, Modal } from '@/ui';

type DeleteApplicationProps = {
  id?: number;
  onClose: () => void;
};

export function DeleteApplication({ id, onClose }: DeleteApplicationProps) {
  const { mutate } = useDeleteRequirement(onClose);

  return (
    <Modal
      opened={id !== undefined}
      title="Удаление заявки"
      onClose={onClose}
    >
      <p>Вы действительно хотите удалить заявку?</p>
      <Modal.Footer>
        <Button
          variant="default"
          onClick={onClose}
        >
          Отмена
        </Button>
        <Button
          variant="light"
          color="red"
          onClick={() => mutate(id)}
        >
          Удалить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
