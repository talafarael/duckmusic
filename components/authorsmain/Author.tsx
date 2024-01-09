'use client'

import Link from "next/link";

interface Props{
    _id:string,
    img:string,
    autor:string
}
const Authors = ({ Post }: { Post: Props[] }) => {
    return (
        <div>
            {Post.map((elem:any) => {
                return (
                    <Link href={`/page/${elem.autor}`} key={elem._id}>
                        <img src={elem.img} alt="" />
                        <h1>{elem.autor}</h1>
                    </Link>
                );
            })}
        </div>
    );
};
export {Authors}