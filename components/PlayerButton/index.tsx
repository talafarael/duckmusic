'use client';
import { ContextAudio, ContextPlayer } from '@/hook/context';
import previousDisable from '../../public/previousDisable.png';
import nextDisable from '../../public/nextSongDisable.png';
import nextButtonDisable from '../../public/playNotAvailable.png';
import Image from 'next/image';
import styles from './style.module.scss';
import stylesAnimation from '../Animation.module.scss';
import imgSrc from '../../public/pause.png';
import Next from '../../public/next.png';
import Previous from '../../public/previous.png';
import { useContext, useEffect, useRef } from 'react';
const PlayerButton = () => {
    const audioRef = useContext(ContextAudio);
    const [value, dispatch] = useContext(ContextPlayer);
    return (
        <div className={styles.container}>
            <button
                disabled={value.allAudio == '' ? true : false}
                className={styles.buttonNext}
                onClick={() => {
                    dispatch({ type: 'previous', payload: audioRef });
                }}
            >
                <Image alt="" className={styles.buttonImg} src={value.allAudio == '' ?previousDisable:Previous}></Image>{' '}
            </button>

            <button
                disabled={value.songs == '' ? true : false}
                onClick={() => {
                    dispatch({ type: 'toggle', payload: audioRef });
                }}
                className={styles.buttonPlayContainer}
            >
                {!value.state ? (
                    <div className={stylesAnimation.soundwaveContainer}>
                        <div className={stylesAnimation.bar}></div>
                        <div className={stylesAnimation.bar}></div>
                        <div className={stylesAnimation.bar}></div>
                        <div className={stylesAnimation.bar}></div>
                    </div>
                ) : (
                    <Image  className={styles.imgPlay} src={value.songs == '' ? nextButtonDisable : imgSrc} alt="" />
                )}
            </button>

            <button
                className={styles.buttonNext}
                disabled={value.allAudio == '' ? true : false}
                onClick={() => {
                    dispatch({ type: 'next', payload: audioRef });
                }}
            >
                <Image className={styles.buttonImg} alt="" src={value.allAudio == '' ?nextDisable:Next}></Image>
            </button>
            <audio src="" ref={audioRef} />
        </div>
    );
};
export { PlayerButton };
