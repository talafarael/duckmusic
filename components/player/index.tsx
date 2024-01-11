'use client';
import { ContextAudio, ContextPlayer } from '@/hook/context';

import Image from 'next/image';
import './style.css';
import stylesAnimation from '../Animation.module.scss';
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
                {!value.state ? (
                    <div className={stylesAnimation.soundwaveContainer}>
                        <div className={stylesAnimation.bar}></div>
                        <div className={stylesAnimation.bar}></div>
                        <div className={stylesAnimation.bar}></div>
                        <div className={stylesAnimation.bar}></div>
                    </div>
                ) : (
                    <Image className="imgPlay" src={imgSrc} alt="" />
                )}
            </button>
            <button>// </button>
            <button
                onClick={() => {
                    dispatch({ type: 'next', payload: audioRef });
                }}
            >
                \\
            </button>
            <audio src="" ref={audioRef} />
        </div>
    );
};

export { Player };
