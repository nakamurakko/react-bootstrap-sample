import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Button, Form, Modal, ModalProps } from 'react-bootstrap';

/**
 * SampleUseImperativeHandleDialog の Ref 型定義。
 */
export interface SampleUseImperativeHandleDialogRef {

  /**
   * ダイアログを表示する。
   * @param resultFunction 表示終了後に実行する関数。
   * @returns
   */
  showdDialog: (resultFunction?: ResultFunction) => void;

  /**
   * ダイアログを表示する。
   * @returns
   */
  showDialogAsync: () => Promise<string>;

}

type ResultFunction = (value: string) => void;

/**
 * Sample Modal ダイアログ。
 */
const SampleUseImperativeHandleDialog = forwardRef<SampleUseImperativeHandleDialogRef>((never, ref) => {

  const dialogRef = useRef<ModalProps>(null);
  const [showSelf, setShowSelf] = useState<boolean>(false);
  /** 実行結果を処理する関数への参照。 */
  const resultFunctionRef = useRef<ResultFunction>();

  const [selectedGem, setSelectedGem] = useState<string>('');

  /**
   * ダイアログを表示する。
   * @param resultFunction 表示終了後に実行する関数。
   */
  const showdDialog = (resultFunction?: ResultFunction): void => {
    setShowSelf(true);
    resultFunctionRef.current = resultFunction;
  };

  const handleClose = (value: string): void => {
    setShowSelf(false);
    if (resultFunctionRef.current) {
      resultFunctionRef.current(value);
    }
  };

  useImperativeHandle(ref,
    () => ({

      showdDialog: (resultFunction?: ResultFunction): void => {
        showdDialog(resultFunction);
      },

      showDialogAsync: async (): Promise<string> => {
        return await new Promise<string>((resolve) => {
          showdDialog(resolve);
        });
      }

    })
  );

  return (
    <>
      <Modal
        dialogClassName={'modal-dialog-width'}
        ref={dialogRef}
        show={showSelf}
      >
        <Modal.Header>
          Dialog sample.
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Check
              checked={selectedGem === 'Diamond'}
              inline
              label='Diamond'
              name='color'
              type='radio'
              value='Diamond'
              onChange={(event): void => setSelectedGem(event.target.value)}
            />
            <Form.Check
              checked={selectedGem === 'Ruby'}
              inline
              label='Ruby'
              name='color'
              type='radio'
              value='Ruby'
              onChange={(event): void => setSelectedGem(event.target.value)}
            />
            <Form.Check
              checked={selectedGem === 'Topaz'}
              inline
              label='Topaz'
              name='color'
              type='radio'
              value='Topaz'
              onChange={(event): void => setSelectedGem(event.target.value)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={(): void => handleClose(selectedGem)}
          >
            Select
          </Button>
          <Button
            onClick={(): void => handleClose('')}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

});

SampleUseImperativeHandleDialog.displayName = SampleUseImperativeHandleDialog.name;

export default SampleUseImperativeHandleDialog;
