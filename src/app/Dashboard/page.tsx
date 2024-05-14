'use client';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import DashboardView from './dashboard';

function App() {
  return (
    <Router>
      <DashboardView />
    </Router>
  );
}

export default App;