import React from "react";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function () {
  return (
    <div className="bg-emerald-100 w-52 p-3 flex gap-2 rounded-lg">
      <div className="size-16 flex items-center justify-center">
        <ThunderstormIcon fontSize="large" />
      </div>
      <div className="flex flex-col">
        <div className="text-3xl">4</div>
        <div>device</div>
      </div>
    </div>
  );
}
