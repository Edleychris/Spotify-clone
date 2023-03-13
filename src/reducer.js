export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    // selectedPlayListId: "37i9dQZF1E37j08SiMTOyN",
    // selectedPlayList: null,
    item: null,
    //REMOVE AFTER FINISH DEVELOPING
    token: 'BQA6f8QOMoj2UXTASl-Sk_HBAS0SBcX89D92A23_PDDmH7GfwERwKZMkJHT15GClSg9Y-NIROWh4KuY8dpSd-88T9u--g1NehHaqJCcLA2wkfvvNW1Zx8YhfT_Y3MD8yhqdXwZxG1sRnYVCc8g9w58Y5ZohpKDcHZLsKJe6xtWhx6F5dhV0mi48M5YkODC7iPheP',
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, 
                user: action.user
            };
            case 'SET_TOKEN':
                return {
                    ...state,
                    token: action.token
                };
                case 'SET_PLAYLISTS':
                    return {
                        ...state,
                        playlists: action.playlists
                    };
            //         case 'SET_PLAYING':
            //         return {
            //             ...state,
            //             playlists: action.playlists
            //         };case 'SET_PLAYER_STATE':
            //         return {
            //             ...state,
            //             playerState: action.playerState,
            //         };case 'SET_PLAYLIST':
            //         return {
            //             ...state,
            //             playlists: action.playlists
            //         };
            default:
                return state;

    }

}
export default reducer;