'use client'

import Link from "next/link";
import styles from './style.module.scss';
interface Props{
    _id:string,
    img:string,
    autor:string
}
const Authors = ({ Post }: { Post: Props[] }) => {console.log(Post)
    return (
        <div className={styles.body}>
            
            {Post.map((elem:any) => {
                return (
                    <Link className={styles.container} href={`/page/${elem.autor}`} key={elem._id}>
                        <img className={styles.img} src={elem.img} alt="" />
                        <h1 className={styles.text}> {elem.autor}</h1>
                    </Link>
                );
            })}
        </div>
    );
};
export {Authors}