'use client';
import { ContextAudio, ContextPlayer } from '@/hook/context';
import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import styles from './style.module.scss';
import stylesAnimation from '../Animation.module.scss';
import imgSrc from '../../public/pause.png';

type MusicItem = {
    _id: string;
    autor: string;
    songs: string;
    idpath: string;
    img_autor: string;
};
type Props = {
    musicItem:MusicItem
    Music: MusicItem[];
};
export default function ButtonPlay({ musicItem ,Music}: Props) {
    const audioRef = useContext(ContextAudio);
    const [value, dispatch] = useContext(ContextPlayer);
console.log(musicItem)
    return (
        <button
            className={styles.button}
            onClick={(e) => {
                e.stopPropagation();
                console.log('aaa');
                dispatch({
                    type: 'addMusic',
                    payload: audioRef,
                    songs: musicItem,
                    allAudio:Music
                });
            }}
        >
            {musicItem.idpath === value.songs.idpath && !value.state ? (
                <div className={ stylesAnimation.soundwaveContainer}>
                  
                    <div className={ stylesAnimation.bar}></div>
                    <div className={ stylesAnimation.bar}></div>
                    <div className={ stylesAnimation.bar}></div>
                    <div className={ stylesAnimation.bar}></div>
                </div>
            ) : (
                <Image className={styles.img} alt="" src={imgSrc} />
            )}
        </button>
    );
}
