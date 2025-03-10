import React, { useState } from 'react';
import { Button, Tab, Tabs } from 'react-bootstrap';

const TabEventKeys = Object.freeze({
  'home': 'home',
  'information': 'information'
});

export default function TabSample(): React.JSX.Element {

  const [tabActiveKey, setTabActiveKey] = useState('');

  return (
    <>
      <h2>Tab sample</h2>

      <Tabs
        activeKey={tabActiveKey}
        defaultActiveKey={TabEventKeys.home}
        onSelect={(eventKey): void => setTabActiveKey(eventKey as string)}
      >
        <Tab
          eventKey={TabEventKeys.home}
          title='Home'
        >
          <h3>Welcome</h3>

          <Button
            type='button'
            onClick={(): void => setTabActiveKey(TabEventKeys.information)}
          >
            Go to Information
          </Button>
        </Tab>
        <Tab
          eventKey={TabEventKeys.information}
          title='Information'
        >
          <h3>Information</h3>
        </Tab>
      </Tabs>
    </>
  );

}
