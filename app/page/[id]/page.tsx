import AuthorMain from "@/components/AuthorMain";
import { MusicPlayer } from "@/components/MusicPlayer";

type Props = {
    params: { id: string };
};
type Song = {
  _id: string;
  autor: string;
  songs: string;
  img_autor: string;
  idpath: string;
  like: number;
};
async function getData(id: string): Promise<Song[]> {
  try {
    const response = await fetch('https://project-49di.onrender.com/auth/getsongsforautor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 120,
      },
      body: JSON.stringify({
        autor: id,
      }),
    });

    const data =await response.json();
   const res=data.music
    return res as Song[];
  } catch (error) {
    console.error('Error fetching songs:', error);
    return [];
  }
}
async function postAuthorInfoPosts(id: string) {
  try{
  const response = await fetch('https://project-49di.onrender.com/auth/getauthorinfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      author: id,
    }),
  });

  const data = response.json();
  return data;
} catch (error) {
  console.error('Error fetching songs:', error);
  return [];
}
}

export default async function Post({ params: { id } }:Props) {
  const authorInfo=await postAuthorInfoPosts(id)
  console.log(authorInfo+'fffff')
 const Songs=await getData(id)
 console.log(Songs+'page')
    return <>
    <AuthorMain />
    <MusicPlayer Music={Songs}/></>;
}
