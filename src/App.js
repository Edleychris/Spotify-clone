import { useState } from 'react'


import AppContainer from "./components/AppContainer";
import MainPage from "./components/main/MainPage";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Login from './components/main/Login';



function App() {
  const [isloggedIn, setLoggin] = useState(false)

  
 const handleSignIn = () => {
    setLoggin(!isloggedIn);
  }

  const handleSignOut = () => {
    setLoggin(false)
  }

  if(isloggedIn){
    return (
    <AppContainer>
      <div className="App">
        <Navbar signout={handleSignOut}/>
        <MainPage/>
        <Sidebar/>
      </div>
    </AppContainer>
    
  );
  }
  return(
    <Login  signIn={handleSignIn}/>
  )
  
}

export default App;
// import Login from "./components/Login";
// import React, { useEffect, } from 'react';
// import Spotify from "./components/Spotify";
// import './App.css'
// import { getTokenFromResponse } from "./components/spotifyAuth";
// import SpotifyWebApi from "spotify-web-api-js";
// import { useDataLayerValue } from "./DataLayer";


// const s = new SpotifyWebApi();

// function App() {
//   const [{ token}, dispatch] = useDataLayerValue();

//     useEffect(() => {
//         const hash=getTokenFromResponse();
//         window.location.hash = "";
//         const _token = hash.access_token;

//         if (_token) {
//           dispatch({
//             type: "SET_TOKEN",
//             token: _token,
//           });
//           s.setAccessToken(_token);

//           s.getMe().then((user) =>{
//             dispatch({
//               type: "SET_USER",
//               user: user,
//             });
          
//         });
//       }

//           // spotify.getPlaylist('37i9dQZEVXcIJyENOWFo').then((response) =>
//           // dispatch({
//           //   type: "SET_DISCOVER_WEEKLY",
//           //   discover_weekly:response,
//           // })
//           // );
//           // spotify.getMyTopArtists().then((response) =>
//           // dispatch({
//           //   type: "SET_SPOTIFY",
//           //   spotify:spotify,
//           // })
//           //  );

//           // spotify.getMe().then((user) => {
//           //   dispatch({
//           //     type: "SET_USER",
//           //     user,
//           //   });
//           // });
//           s.getUserPlaylists().then((playlists) =>{
//             dispatch({
//               type: "SET_PLAYLISTS",
//               playlists: playlists,
//             });
//           });
//         // }
        
//       }, [token, dispatch]);
//   return (
//     <div className='container'>
//       {token ? (
//         <Spotify s={s}/>
//         ) : (
//           <Login/>
//         )
//       }
//     </div>
//   );
// }
// export default App;

