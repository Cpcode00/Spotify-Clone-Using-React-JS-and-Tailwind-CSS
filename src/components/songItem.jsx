import React, { useContext } from "react";
import { PlayerContext } from "../context/playerContext";

export default function SongItem({ item }) {

  const { playWithId } = useContext(PlayerContext);

  return (
    <div onClick={() => playWithId(id)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img className="rounded" src={item.image} alt="" />
      <p className="font-bold mt-2 mb-1">{item.name}</p>
      <p className="text-slate-200 text-sm">{item.desc}</p>
    </div>
  );
}

