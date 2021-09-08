import React, { useState } from 'react';

const Artist = () => {
  const [ artistName, setArtistName ] = useState('Drake');

  return (
    <div>
      <h1 id="artist">{artistName}</h1>
      <h3>Music Genre: </h3>
      <p>Everything</p>
      <h3>Bio: </h3>
      <p>Aubrey Drake Graham (born October 24, 1986) is a Canadian rapper and singer.</p>
    </div>
  );
    }

export default Artist;
