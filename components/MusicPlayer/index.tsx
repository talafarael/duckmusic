import { useEffect } from 'react';
import ButtonPlay from '../buttonPlay';
import styles from './style.module.scss';

type MusicItem = {
    _id: string;
    autor: string;
    songs: string;
    idpath: string;
    img_autor: string;
};

type Props = {
    Music: MusicItem[];
};

const MusicPlayer = ({ Music }: Props) => {
    return (
        <>
            {Music.map((musicItem) => (
                <div key={musicItem._id} className={styles.container}>
                    <ButtonPlay Music={Music} musicItem={musicItem } />
                    <img
                        className={styles.imgIcon}
                        src={musicItem.img_autor}
                        alt={`Image of ${musicItem.autor}`}
                    />
                    <div className={styles.textContainer}>
                        <h1 className={styles.title}>{musicItem.songs}</h1>

                        <p className={styles.author}>{musicItem.autor} </p>
                    </div>
                </div>
            ))}
        </>
    );
};
export  {MusicPlayer}
