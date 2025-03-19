import '../../global.css';

import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

/**
 * Sample Modal ダイアログ。
 *
 * @returns
 */
export default function SampleUseEffectModalDialog({ showDialog, onClose }:
  {
    showDialog: boolean,
    /**
     * 画面を閉じる処理。
     *
     * @param selectedColor 選択した色。
     * @returns
     */
    onClose: (selectedColor: string) => void
  }
): React.JSX.Element {

  const [selectedColor, setSelectedColor] = useState<string>('');

  /**
   * Modal 表示時の処理。
   */
  useEffect(() => {
    void new Promise((resolve) => {
      setTimeout(() => {
        setSelectedColor('Blue');
        resolve(null);
      }, 1000);
    });
  }, []);

  return (
    <>
      <Modal
        dialogClassName={'modal-dialog-width'}
        show={showDialog}
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
              checked={selectedColor === 'Red'}
              inline
              label='Red'
              name='color'
              type='radio'
              value='Red'
              onChange={(event): void => setSelectedColor(event.target.value)}
            />
            <Form.Check
              checked={selectedColor === 'Green'}
              inline
              label='Green'
              name='color'
              type='radio'
              value='Green'
              onChange={(event): void => setSelectedColor(event.target.value)}
            />
            <Form.Check
              checked={selectedColor === 'Blue'}
              inline
              label='Blue'
              name='color'
              type='radio'
              value='Blue'
              onChange={(event): void => setSelectedColor(event.target.value)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={(): void => onClose(selectedColor)}
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
