'use client';
export default function (state: any, action: any) {
    switch (action.type) {
        case 'addMusic':
            if (state.songs.idpath === action.songs.idpath && !state.state) {
                action.payload.current.pause();
                
                return { ...state, state: true };
              
            } else { 
             
              action.payload.current.src=action.songs.idpath
                action.payload.current.play();
              
                return {
                    ...state,
                    state: false,
                    songs: action.songs,
                    allAudio:action.allAudio
                };
            }
        case 'toggle':
            if (state.state) {
                action.payload.current.play();
                return { ...state, state: false };
            } else {
                action.payload.current.pause();
                return { ...state, state: true };
            }
            case 'next':
               
             const index=state.allAudio.findIndex((obj:any) => obj.idpath ===state.songs.idpath)
             if(index==state.allAudio.length-1){
 return { ...state};
             }else{
                
                const song=state.allAudio[index+1]
                action.payload.current.src=song.idpath
                action.payload.current.play();
                return { ...state,songs:song, state: false };
             };
             case 'previous':
               
             const previous=state.allAudio.findIndex((obj:any) => obj.idpath ===state.songs.idpath)
             if(previous==0){
             return { ...state};
             }else{
                
                const song=state.allAudio[previous-1]
                action.payload.current.src=song.idpath
                action.payload.current.play();
                return { ...state,songs:song, state: false };
             }
            
                   
                
        default:
            return state;
    }
}
