import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { Artist, Discography, Lyrics, Album } from './components';
import { Header } from './layout';


function App() {

  return (
    <main>
      <Artist />
      <Album />
      <br></br>
      <Discography />
      <Lyrics />
    </main>
  );
}

export default App;
