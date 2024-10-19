import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Button, Form, Modal, ModalProps } from 'react-bootstrap';

/**
 * SampleUseImperativeHandleDialog の Ref 型定義。
 */
export interface SampleUseImperativeHandleDialogRef {
  showdDialog: () => void;
}

/**
 * SampleUseImperativeHandleDialog の props 定義。
 */
export interface SampleUseImperativeHandleDialogProps {
  onClose: (selectedGem: string) => void
}

/**
 * Sample Modal ダイアログ。
 */
const SampleUseImperativeHandleDialog = forwardRef<SampleUseImperativeHandleDialogRef, SampleUseImperativeHandleDialogProps>(({ onClose }, ref) => {

  const dialogRef = useRef<ModalProps>(null);
  const [showSelf, setShowSelf] = useState<boolean>(false);

  const [selectedGem, setSelectedGem] = useState<string>('');

  const handleClose = (): void => {
    setShowSelf(false);
    onClose(selectedGem);
  };

  useImperativeHandle(ref,
    () => ({
      showdDialog: (): void => {
        setShowSelf(true);
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
            onClick={handleClose}
          >
            Select
          </Button>
          <Button
            onClick={handleClose}
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
