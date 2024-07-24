import { useState } from 'react';
import { Button } from 'react-bootstrap';

import SampleModalDialog from './sample-modal-dialog/sample-modal-dialog';

/**
 * Modal サンプルコンポーネント。
 *
 * @returns JSX.Element
 */
export default function ModalSample(): JSX.Element {

  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [selectedAnimal, setSelectedAnimal] = useState<string>('');

  const handleShowDialoog = (): void => {
    setShowDialog(true);
  }

  const handleCloseDialog = (selectedAnimal: string): void => {
    setSelectedAnimal(selectedAnimal);
    setShowDialog(false);
  }

  return (
    <>
      <h2>Modal sample</h2>

      <Button
        onClick={handleShowDialoog}
      >
        Show dialog
      </Button>
      <span>{selectedAnimal}</span>

      {showDialog && <SampleModalDialog onClose={handleCloseDialog} />}
    </>
  );

}
