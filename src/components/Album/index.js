import React, { useState } from 'react';
import '../../styles/styles.css';

function Album(props) {

  const [album, setAlbum] = useState([
    { id: 1, name: 'Certified Lover Boy', img: "https://news.artnet.com/app/news-upload/2021/08/E-IU6LZXsAcioMl-1024x1024.jpeg", release: '2021' },
    { id: 2, name: 'Scorpion', img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Scorpion_by_Drake.jpg/220px-Scorpion_by_Drake.jpg", release: '2018'},
    { id: 3, name: 'More Life', img: "https://upload.wikimedia.org/wikipedia/en/7/70/Drake_-_More_Life_cover.jpg", release: '2017' },
    { id: 4, name: 'Views', img: "https://upload.wikimedia.org/wikipedia/en/a/af/Drake_-_Views_cover.jpg" , release: '2016'},
    { id: 5, name: `If You're Reading This, It's Too Late`, img: "https://upload.wikimedia.org/wikipedia/en/1/11/Drake_-_If_You%27re_Reading_This_It%27s_Too_Late.png", release: '2015'},
    { id: 6, name: 'Nothing Was The Same', img: "https://upload.wikimedia.org/wikipedia/en/4/42/Drake_-_Nothing_Was_the_Same_cover.png", release: '2013'}
  ])

  
  const [randomAlbum, setRandomAlbum] = useState(0);

  const handleRandomAlbum = () => { 
    setRandomAlbum(Math.floor(album.length*Math.random()))
  }

  return (
      <div> 
        <p>{album[randomAlbum].name}, {album[randomAlbum].release} </p>
        <img className="img" src={album[randomAlbum].img}/>
        <br></br>
        <button onClick={handleRandomAlbum}>Randomiser</button>
      </div>
    );
  }
  
  export default Album;