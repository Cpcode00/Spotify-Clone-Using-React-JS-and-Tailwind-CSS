import React from "react";
import { useNavigate } from "react-router-dom";

export default function AlbumItem({ item }) {

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/album/${item.id}`)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img className="rounded" src={item.image} alt="" />
      <p className="font-bold mt-2 mb-1">{item.name}</p>
      <p className="text-slate-200 text-sm">{item.desc}</p>
    </div>
  );
}

