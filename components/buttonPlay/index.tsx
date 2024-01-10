'use client';
import { ContextAudio, ContextPlayer } from '@/hook/context';
import React, { useContext } from 'react';
type Props={
    musicItem:string
    
}
export default function ButtonPlay({musicItem}:Props) {
    const audioRef = useContext(ContextAudio);
    const [value, dispatch] = useContext(ContextPlayer);
    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                console.log('aaa');
                dispatch({
                    type: 'addMusic',
                    payload: audioRef,
                    songs: musicItem,
                });
            }}
        ></button>
    );
}
