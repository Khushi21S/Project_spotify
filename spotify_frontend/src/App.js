import "./output.css";
import { BrowserRouter, Routes, Route, Navigate, useSubmit } from 'react-router-dom';
import { useState } from "react";
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import HomeComponent from "./routes/Home";
import { useCookies } from "react-cookie";
import LoggedInHomeComponent from "./routes/LoggedInHome";
import UploadSong from "./routes/UploadSong";
import MyMusic from "./routes/MyMusic";
import songContext from "./contexts/songContext";
import SearchPage from "./routes/SearchPage";
import Library from "./routes/Library";
import SinglePlaylistView from "./routes/SinglePlaylistView";

function App() {
  const [currentSong, setCurrentSong] = useState(null);

  const [cookie, setCookie] = useCookies(["token"]);
  const [soundPlayed, setSoundPlayed] = useState(null);
  const[isPaused, setIsPaused] = useState(true);

  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
      { cookie.token ? (
        //logged in routes
        <songContext.Provider value ={{currentSong, setCurrentSong, soundPlayed, setSoundPlayed,isPaused, setIsPaused}}>
          <Routes>
            <Route path="/" element = {<div>hello</div>}/>
            <Route path ="/home" element = {<LoggedInHomeComponent />} />
            <Route path="/uploadSong" element = {<UploadSong/>}/>
            <Route path="/myMusic" element = {<MyMusic/>}/>
            <Route path="/search" element = {<SearchPage/>}/>
            <Route path="/library" element = {<Library/>}/>
            <Route path="/playlist/:playlistId" element = {<SinglePlaylistView/>}/>
            <Route path="*" element={<Navigate to="/home"/>}/>
          </Routes>
        </songContext.Provider>
      ) : (
        //logged out routes
        <Routes>
          <Route path ="/home" element = {<HomeComponent />} />
          <Route path ="/login" element = {<LoginComponent />} />
          <Route path ="/signup" element = {<SignupComponent />} />
          <Route path="*" element={<Navigate to="/login"/>}/>
        </Routes>
         )
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
