import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Resources from './components/Resources';
import Information from './components/Information';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/information" element={<Information />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
