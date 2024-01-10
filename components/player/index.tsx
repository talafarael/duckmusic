'use client';
import { ContextAudio, ContextPlayer } from '@/hook/context';

import Image from 'next/image';
import './style.css';
import imgSrc from '../../public/pause.png';
import { useContext, useEffect, useRef } from 'react';

const Player = () => {
    const audioRef = useContext(ContextAudio);
    const [value, dispatch] = useContext(ContextPlayer);
    return (
        <div className="playerContainer">
            <button
                onClick={() => {
                   
                    dispatch({ type: 'toggle', payload: audioRef });
                }}
                className="buutonPlayContainer"
            >
                <Image className="imgPlay" src={imgSrc} alt="" />
            </button>
            <audio src='' ref={audioRef} />
        </div>
    );
};

export { Player };
