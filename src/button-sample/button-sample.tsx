import { useState } from 'react';
import { Button } from 'react-bootstrap';

/**
 * Button サンプルコンポーネント。
 *
 * @returns JSX.Element
 */
export default function ButtonSample() {

  /** クリックカウント数。 */
  const [clickCount, setClickCount] = useState<number>(0);

  /**
   * メッセージ表示ボタンクリック。
   */
  function handleMessageClick(): void {
    alert('Hello');
  }

  /**
   * カウントアップボタンクリック。
   */
  function handleCountupClick(): void {
    setClickCount(clickCount + 1);
  }

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
