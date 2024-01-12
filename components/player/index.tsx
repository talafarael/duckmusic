'use client';
import { ContextAudio, ContextPlayer } from '@/hook/context';

import Image from 'next/image';
import styles from './style.module.scss';
import stylesAnimation from '../Animation.module.scss';
import imgSrc from '../../public/pause.png';
import { useContext, useEffect, useRef } from 'react';
import { PlayerButton } from '../PlayerButton';

const Player = () => {
   
    return (
        <div className={styles.playerContainer}>
             <PlayerButton />
        </div>
    );
};

export { Player };
