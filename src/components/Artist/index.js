import React, { useState } from 'react';

const Artist = () => {
  const [ artistName, setArtistName ] = useState('Drake');
  // const [ likeCount , setLikeCount ] = useState(0);

//   increaseLikeCount = () => this.setState(prevCount => ({ likeCount: prevState.likeCount++ }))

  return (
    <div>
      <h1 id="artist">{artistName}</h1>
      {/* <p>{likeCount}</p>
      <button onClick={() => increaseLikeCount(prevCount = prevCount+1)}>Like</button> */}
      <h3>Music Genre: </h3>
      <p>Everything</p>
      <h3>Bio: </h3>
      <p>Aubrey Drake Graham (born October 24, 1986) is a Canadian rapper and singer.</p>
    </div>
  );
    }

export default Artist;
