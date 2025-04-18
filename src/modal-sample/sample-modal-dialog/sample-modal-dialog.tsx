import '../../global.css';

import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

/**
 * Sample Modal ダイアログ。
 *
 * @returns
 */
export default function SampleModalDialog({ showDialog, onClose }:
  {
    showDialog: boolean,
    /**
     * 画面を閉じる処理。
     *
     * @param selectedAnimal 選択した動物。
     * @returns
     */
    onClose: (selectedAnimal: string) => void
  }
): React.JSX.Element {

  const [selectedAnimal, setSelectedAnimal] = useState<string>('');

  /**
   * Modal 表示時の処理。
   */
  const handleShow = (): void => {
    setSelectedAnimal('Hamster');
  };

  return (
    <>
      <Modal
        dialogClassName={'modal-dialog-width'}
        show={showDialog}
        onShow={handleShow}
      >
        <Modal.Header
          closeButton
          onHide={(): void => onClose('')}
        >
          Dialog sample.
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Check
              checked={selectedAnimal === 'Dog'}
              inline
              label='Dog'
              name='animal'
              type='radio'
              value='Dog'
              onChange={(event): void => setSelectedAnimal(event.target.value)}
            />
            <Form.Check
              checked={selectedAnimal === 'Cat'}
              inline
              label='Cat'
              name='animal'
              type='radio'
              value='Cat'
              onChange={(event): void => setSelectedAnimal(event.target.value)}
            />
            <Form.Check
              checked={selectedAnimal === 'Hamster'}
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
            onClick={(): void => onClose(selectedAnimal)}
          >
            Select
          </Button>
          <Button
            onClick={(): void => onClose('')}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}
