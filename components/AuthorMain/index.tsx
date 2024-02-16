 'use client'

import { ImgSlider } from "../ImgSlider"

 
 
 export default function AuthorMain(Info:Record<string,unknown>){
    console.log(Info)
    return (
        <div>
            <ImgSlider/>
        </div>
    )
 }