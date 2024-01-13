
import { Authors } from "@/components/authorsmain/Author"

import Link from "next/link"


const getMainPosts= async()=>{
  const response =await fetch('https://project-49di.onrender.com/auth/getsongsforcreatmainpage',
{ next: {
  revalidate: 60,
}})
  return  response.json()
}
export default async function Main() {

 const author= await getMainPosts()

  
  return (
   
    <div>
    <Authors Post={author.arr.autor}></Authors>
     

     
    </div>
   
    
  )
}
