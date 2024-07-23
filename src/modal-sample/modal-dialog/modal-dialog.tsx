import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

import styles from './modal-dialog.module.css';

/**
 * Modal ダイアログ。
 *
 * @returns JSX.Element
 */
export default function ModalDialog({ showDialog, onClose }: { showDialog: boolean, onClose: (selectedAnimal: string) => void }): JSX.Element {

  const [selectedAnimal, setSelectedAnimal] = useState<string>('');

  return (
    <>
      <Modal
        dialogClassName={styles['modal-dialog-width']}
        show={showDialog}
      >
        <Modal.Header>
          Dialog sample.
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Check
              inline
              label='Dog'
              name='animal'
              type='radio'
              value='Dog'
              onChange={(event): void => setSelectedAnimal(event.target.value)}
            />
            <Form.Check
              inline
              label='Cat'
              name='animal'
              type='radio'
              value='Cat'
              onChange={(event): void => setSelectedAnimal(event.target.value)}
            />
            <Form.Check
              inline
              label='Hamster'
              name='animal'
              type='radio'
              value='Hamster'
              onChange={(event): void => setSelectedAnimal(event.target.value)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={
              (event): void => {
                onClose(selectedAnimal);
              }
            }
          >
            Select
          </Button>
          <Button
            onClick={
              (event): void => {
                onClose('');
              }
            }
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}