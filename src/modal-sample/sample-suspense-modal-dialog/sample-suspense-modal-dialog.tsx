import '../../global.css';

import React, { Suspense, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

import { SampleService } from '../../sample-service';

/**
 * Sample Modal ダイアログ。
 *
 * @returns
 */
export default function SampleSuspenseModalDialog({ showDialog, onClose }:
  {
    showDialog: boolean,
    /**
     * 画面を閉じる処理。
     *
     * @param selectedFruit 選択した果物。
     * @returns
     */
    onClose: (selectedFruit: string) => void
  }
): React.JSX.Element {

  const [selectedFruit, setSelectedFruit] = useState<string>('');
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  /**
   * Modal 表示開始時の処理。
   */
  const handleStartup = async (): Promise<void> => {
    setIsCompleted(false);
    await SampleService.sleep();
  };

  /**
   * Modal 表示時の処理。
   */
  const haneleCompleted = (): void => {
    setIsCompleted(true);
    setSelectedFruit('Grape');
  };

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
          <Suspense fallback={<p>Now loading</p>}>
            <DialogContent isCompleted={isCompleted} onStartup={handleStartup} onCompleted={haneleCompleted} />
            <Form>
              <Form.Check
                checked={selectedFruit === 'Apple'}
                inline
                label='Apple'
                name='fruit'
                type='radio'
                value='Apple'
                onChange={(event): void => setSelectedFruit(event.target.value)}
              />
              <Form.Check
                checked={selectedFruit === 'Orange'}
                inline
                label='Orange'
                name='fruit'
                type='radio'
                value='Orange'
                onChange={(event): void => setSelectedFruit(event.target.value)}
              />
              <Form.Check
                checked={selectedFruit === 'Grape'}
                inline
                label='Grape'
                name='fruit'
                type='radio'
                value='Grape'
                onChange={(event): void => setSelectedFruit(event.target.value)}
              />
            </Form>
          </Suspense>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={(): void => onClose(selectedFruit)}
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

function DialogContent({ isCompleted, onStartup, onCompleted }:
  {
    /**
     * 処理が完了しているかどうか。
     */
    isCompleted: boolean,
    /**
     * 起動処理。
     * @returns
     */
    onStartup: () => Promise<void>,
    /**
     * 完了処理。
     * @returns
     */
    onCompleted: () => void
  }
): React.JSX.Element {

  if (isCompleted) {
    return (
      <></>
    );
  }

  throw new Promise(() => {
    void onStartup().then()
      .finally(() => {
        onCompleted();
      });
  });

}
