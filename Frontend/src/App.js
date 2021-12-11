import React from 'react';
import './App.css';
import MapPage from './pages/MapPage';
import NavBar from './components/NavBar/NavBar';

import { Button, Container, Row, Col, Figure } from 'react-bootstrap';

function App() {
  return (
    <>
      <NavBar />
      <div className='wrapper-container'>
        <MapPage />
      </div>
    </>
  );
}

export default App;
