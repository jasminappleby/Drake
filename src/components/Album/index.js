import React from 'react';

const Album = (prop) => {
  
    return (
      <div>
        <img src={prop.img} alt="album thing"/> 
        <button onClick={prop.randomAlbum}>Click me for random album pls</button>
      </div>
    );
      }
  
  export default Album;