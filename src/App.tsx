import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Navbar, NavDropdown } from 'react-bootstrap';
import { BsList } from 'react-icons/bs';
import { Outlet } from 'react-router-dom';

export default function App(): JSX.Element {

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <NavDropdown title={<BsList />}>
            <NavDropdown.Item href='/button-sample'>Button sample</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );

}
