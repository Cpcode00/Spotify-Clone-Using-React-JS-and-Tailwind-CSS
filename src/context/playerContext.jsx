import { createContext, useRef, useState, useEffect } from "react";
import {songsData} from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track,setTrack] = useState(songsData[0]);
  const [playerStatus,setPlayerStatus] = useState(false);
  const [time,setTime] = useState({
    currentTime: {
      seconds: 0,
      minute: 0
    },
    totalTime : {
      seconds: 0,
      minute: 0
    }
  })

  function play() {
    audioRef.current.play();
    setPlayerStatus(true);
  }

  function pause() {
    audioRef.current.pause();
    setPlayerStatus(false);
  }

  const playWithId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayerStatus(true);
  }

  const previous = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlayerStatur(true);
    }
  }

  const next = async () => {
    if (track.id < songsData.length-1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setPlayerStatur(true);
    }
  }

  const seekSong = async (e) => {
    audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration);
  }

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";
        setTime({
          currentTime: {
            seconds: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60)
          },
          totalTime : {
            seconds: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60)
          }
        })
      }
    }, 1000)
  })


  const contextValue = {
    audioRef, seekBg, seekBar, track, setTrack, playerStatus,
    setPlayerStatus, time, setTime, play, pause, playWithId,
    previous, next, seekSong
  }

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );

}

export default PlayerContextProvider;

