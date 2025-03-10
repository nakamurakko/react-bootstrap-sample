import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import App from './App';
import ButtonSample from './button-sample/button-sample';
import ModalSample from './modal-sample/modal-sample';
import TabSample from './tab-sample/tab-sample';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='button-sample' element={<ButtonSample />} />
      <Route path='modal-sample' element={<ModalSample />} />
      <Route path='tab-sample' element={<TabSample />} />
    </Route>
  )
);

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
