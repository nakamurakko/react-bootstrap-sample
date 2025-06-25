import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

/**
 * Button サンプルコンポーネント。
 *
 * @returns
 */
export default function ButtonSample(): React.JSX.Element {

  /** クリックカウント数。 */
  const [clickCount, setClickCount] = useState<number>(0);
  /** クリックカウント数(複数カウントアップ)。 */
  const [clickMultipleCount, setClickMultipleCount] = useState<number>(0);

  /**
   * メッセージ表示ボタンクリック。
   */
  const handleMessageClick = (): void => {
    alert('Hello');
  };

  /**
   * カウントアップボタンクリック。
   */
  const handleCountupClick = (): void => {
    setClickCount(clickCount + 1);
  };

  /**
   * 複数カウントアップボタンクリック。
   */
  const handleCountupMultipleClick = (): void => {
    setClickMultipleCount((prev: number): number => {
      return prev + 1;
    });
    setClickMultipleCount((prev: number): number => {
      return prev + 1;
    });
  };

  return (
    <>
      <h2>Button sample</h2>

      <Button
        onClick={handleMessageClick}
      >
        Message
      </Button>

      <Button
        onClick={handleCountupClick}
      >
        {clickCount}
      </Button>

      <Button
        onClick={handleCountupMultipleClick}
      >
        {clickMultipleCount}
      </Button>
    </>
  );

}
