import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Navbar, NavDropdown } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

export default function App(): JSX.Element {

  return (
    <>
      <Navbar className='bg-body-tertiary' expand='lg' >
        <Container fluid>
          <NavDropdown title='React Bootstrap sample'>
            <NavDropdown.Item href='/button-sample'>Button sample</NavDropdown.Item>
            <NavDropdown.Item href='/modal-sample'>Modal sample</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );

}
