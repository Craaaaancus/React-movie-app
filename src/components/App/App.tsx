import React, { useState } from 'react';
import './App.css';
import Button from '@components/Button';
import { AppHeader } from '@components/AppHeader';
import { AppContainer } from '../AppContainer';
import { AppFooter } from '../AppFooter';
import { AppMain } from '../AppMain';

const App = () => {
  return (
    <>
      <AppHeader></AppHeader>
      <AppMain></AppMain>
      <AppFooter></AppFooter>
    </>
  );
};

export default App;
