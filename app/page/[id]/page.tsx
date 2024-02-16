import AuthorMain from "@/components/AuthorMain";
import { MusicPlayer } from "@/components/MusicPlayer";
import { getData, postAuthorInfoPosts } from "@/services/postPosts";

type Props = {
    params: { id: string };
};


export default async function Post({ params: { id } }:Props) {
  const authorInfo=await postAuthorInfoPosts(id)
  console.log(authorInfo+'fffff')
 const Songs=await getData(id)
 console.log(Songs+'page')
    return <>
    <AuthorMain Info={authorInfo}/>
    <MusicPlayer Music={Songs}/></>;
}
