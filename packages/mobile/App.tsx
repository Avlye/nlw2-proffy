import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { Landing } from './src/pages/Landing';

export default function App() {
  return (
    <>
      <Landing />
      <StatusBar style="light" />
    </>
  );
}
