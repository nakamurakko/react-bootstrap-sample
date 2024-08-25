import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';

import SampleModalDialog from './sample-modal-dialog/sample-modal-dialog';
import SampleSleepModalDialog from './sample-sleep-modal-dialog/sample-sleep-modal-dialog';
import SampleSuspenseModalDialog from './sample-suspense-modal-dialog/sample-suspense-modal-dialog';
import SampleUseEffectModalDialog from './sample-use-effect-modal-dialog/sample-use-effect-modal-dialog';

/**
 * Modal サンプルコンポーネント。
 *
 * @returns
 */
export default function ModalSample(): React.JSX.Element {

  //#region ダイアログサンプル。

  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [selectedAnimal, setSelectedAnimal] = useState<string>('');

  /**
   * Modal 表示処理。
   */
  const handleShowDialoog = (): void => {
    setShowDialog(true);
  };

  /**
   * Modal 終了処理。
   * @param selectedAnimal 選択した動物。
   */
  const handleCloseDialog = (selectedAnimal: string): void => {
    setSelectedAnimal(selectedAnimal);
    setShowDialog(false);
  };

  //#endregion

  //#region sleep 後に起動するダイアログサンプル。

  const [showSleepDialog, setShowSleepDialog] = useState<boolean>(false);
  const [selectedCar, setSelectedCar] = useState<string>('');

  const handleShowSleepDialog = (): void => {
    setShowSleepDialog(true);
  };

  const handleCloseSleepDialog = (selectedCar: string): void => {
    setSelectedCar(selectedCar);
    setShowSleepDialog(false);
  };

  //#endregion

  //#region Suspense で遅延表示させるダイアログサンプル。

  const [showSuspenseDialog, setShowSuspenseDialog] = useState<boolean>(false);
  const [selectedFruit, setSelectedFruit] = useState<string>('');

  const handleShowSuspenseDialog = (): void => {
    setShowSuspenseDialog(true);
  };

  const handleCloseSuspenseDialog = (selectedFruit: string): void => {
    setSelectedFruit(selectedFruit);
    setShowSuspenseDialog(false);
  };

  //#endregion

  //#region useEffect を使用したダイアログサンプル。

  const [showUseEffectDialog, setShowUseEffectDialog] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<string>('');

  const handleShowUseEffectDialog = (): void => {
    setShowUseEffectDialog(true);
  };

  const handleCloseUseEffectDialog = (selectedColor: string): void => {
    setSelectedColor(selectedColor);
    setShowUseEffectDialog(false);
  };

  //#endregion

  return (
    <>
      <h2>Modal sample</h2>

      <Table>
        <tbody>
          <tr>
            <td>
              <Button
                onClick={handleShowDialoog}
              >
                Show dialog
              </Button>
            </td>
            <td>
              <span>{selectedAnimal}</span>
            </td>

            {
              showDialog &&
              <SampleModalDialog
                showDialog={showDialog}
                onClose={handleCloseDialog}
              />
            }
          </tr>
          <tr>
            <td>
              <Button
                onClick={handleShowSleepDialog}
              >
                Show dialog (sleep)
              </Button>
            </td>
            <td>
              <span>{selectedCar}</span>
            </td>

            {
              showSleepDialog &&
              <SampleSleepModalDialog
                showDialog={showSleepDialog}
                onClose={handleCloseSleepDialog}
              />
            }
          </tr>
          <tr>
            <td>
              <Button
                onClick={handleShowSuspenseDialog}
              >
                Show dialog (suspense)
              </Button>
            </td>
            <td>
              <span>{selectedFruit}</span>
            </td>

            {
              showSuspenseDialog &&
              <SampleSuspenseModalDialog
                showDialog={showSuspenseDialog}
                onClose={handleCloseSuspenseDialog}
              />
            }
          </tr>
          <tr>
            <td>
              <Button
                onClick={handleShowUseEffectDialog}
              >

                Show dialog (useEffect)
              </Button>
            </td>
            <td>
              <span>{selectedColor}</span>
            </td>

            {
              showUseEffectDialog &&
              <SampleUseEffectModalDialog
                showDialog={showUseEffectDialog}
                onClose={handleCloseUseEffectDialog}
              />
            }
          </tr>

        </tbody>
      </Table>
    </>
  );

}
