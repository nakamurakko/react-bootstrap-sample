import { useState } from 'react';
import { Button } from 'react-bootstrap';

/**
 * Button サンプルコンポーネント。
 *
 * @returns JSX.Element
 */
export default function ButtonSample(): JSX.Element {

  /** クリックカウント数。 */
  const [clickCount, setClickCount] = useState<number>(0);

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
    </>
  );

}
