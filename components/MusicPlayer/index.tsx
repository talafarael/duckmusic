'use client'
import React from 'react'

type MusicItem = {
    _id: string;
    autor: string;
    songs: string;
    img_autor: string;

  };
  
  type Props = {
    Music: MusicItem[];
  };
const MusicPlayer=({Music}:Props)=> {
  return (
    <div>
      {Music.map((musicItem) => (
        <div key={musicItem._id}>
          <h2>{musicItem.autor}</h2>
          <p>Songs: {musicItem.songs}</p>
          <img src={musicItem.img_autor} alt={`Image of ${musicItem.autor}`} />
         
        </div>
      ))}
    </div>
  )
}
export { MusicPlayer}