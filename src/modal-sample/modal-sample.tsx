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

  /**
   * Modal 表示処理。
   */
  const handleShowDialoog = (): void => {
    setShowDialog(true);
  }

  /**
   * Modal 終了処理。
   * @param selectedAnimal 選択した動物。
   */
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

      {
        showDialog &&
        <SampleModalDialog
          showDialog={showDialog}
          onClose={handleCloseDialog}
        />
      }

    </>
  );

}
