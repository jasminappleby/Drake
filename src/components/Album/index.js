import React from 'react';

const Album = (prop) => {
  
    return (
      <div>
        <img src={prop.img} alt="album"/> 
        <button onClick={prop.randomAlbum}>Random Album!</button>
      </div>
    );
      }
  
  export default Album;