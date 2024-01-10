'use client';
export default function (state: any, action: any) {
    switch (action.type) {
        case 'addMusic':
            if (state.songs === action.songs && !state.state) {
                action.payload.current.pause();
                console.log(action.songs);
                return { ...state, state: true };
              
            } else { 
              console.log('adad')
              action.payload.current.src=action.songs
                action.payload.current.play();
                console.log(action.songs);
                return {
                    ...state,
                    state: false,
                    songs: action.songs,
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

        default:
            return state;
    }
}
