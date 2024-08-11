import React, { useContext } from "react";
import Sidebar from "./components/sidebar";
import Display from "./components/display";
import Player from "./components/player";
import { PlayerContext } from "./context/playerContext";

export default function App() {

  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
}
