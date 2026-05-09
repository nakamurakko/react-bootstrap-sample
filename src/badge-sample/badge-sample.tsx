import React, { useState } from 'react';
import { Badge, Button } from 'react-bootstrap';

/**
 * Badge サンプルコンポーネント。
 *
 * @returns
 */
export default function BadgeSample(): React.JSX.Element {

  const [clickCount, setClickCount] = useState<number>(0);

  return (
    <>
      <h2>Badge sample</h2>

      <Button onClick={(): void => setClickCount(clickCount + 1)}>
        Click <Badge bg='danger' pill>{clickCount}</Badge>
      </Button>
    </>
  );

}
