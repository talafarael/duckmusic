"use client"
export default function(state:any,action:any){
 switch(action.type){
    case 'toggle':
        return state ?(state=false):(state=true)
 }

}