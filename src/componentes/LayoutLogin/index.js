// src/componentes/LayoutLogin/index.tsx ou .jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../Menu';

export default function LayoutLogin() {
  return (
    <>
      <Menu />
      <main>
        <Outlet />
      </main>
    </>
  );
}
