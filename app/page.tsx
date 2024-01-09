'use client'
import { Authors } from "@/components/authorsmain/Author"
import { getMainPosts } from "@/services/getPosts"
import Link from "next/link"
import { useEffect, useState } from "react"
interface Post{
  _id:string,
  img:string,
  autor:string
}

export default function Main() {
const [main,setMain]=useState<Post[]>([])
const [load ,setLoad]=useState<boolean>(false)
useEffect(()=>{
  getMainPosts().then(
  data=>{console.log(data.arr.autor)
    setLoad(true)
    setMain(data.arr.autor)
    
  }
  )
},[])

  return (
    <div>
      {load?(  <Authors Post={main}></Authors>):(['load...'])}
     

     
    </div>
   
    
  )
}
