import React, { useEffect } from 'react';
import axios from 'axios';

const Lyrics = ({ close }) => {
    const [ lyric, setLyric ] = React.useState();
    useEffect(() => {
        async function giveMeLyric() {
            try {
                let { data } = await axios.get('https://private-amnesiac-a2099-lyricsovh.apiary-proxy.com/v1/Travis%20Scott/SICKO%20MODE')
                setLyric(data);
            } catch (err) {
                console.warn(err);
                setLyric({setup: "sick mode :/"})
            }
        }

        giveMeLyric()
        const stream = setInterval(giveMeLyric, 50000)

        return () => clearInterval(stream)
    }, [])


    return (
        <>
        <span onClick={close} style={{cursor: "pointer"}}>x</span>
        { lyric ?
            <>
            <h1>SICKO MODE LYRICS:</h1>
            <p>{lyric.setup}</p>
            </>
        : <h2>Lyrics Loading...</h2> }
        </>
    )
}

export default Lyrics;