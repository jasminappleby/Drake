import React, { useState } from 'react';

const Artist = () => {
  const [ artistName, setArtistName ] = useState('Drake');

  return (
    <div>
      <h1 id="artist">{artistName}</h1>
      <h3>Music Genre: </h3>
      <p>Hip-Hop and Rap</p>
      <h3>Biography: </h3>
      <p>Aubrey Drake Graham (born October 24, 1986) is a Canadian rapper and singer.</p>
    </div>
  );
    }

export default Artist;
