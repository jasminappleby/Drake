
import React from 'react';

const Album = (prop) => {
  
    return (
      <div>
        <img src={prop.img} alt="album thing"/> 
        <br></br>
        <button onClick={prop.randomAlbum}>Randomiser</button>
      </div>
    );
  }
  
  export default Album;