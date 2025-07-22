import React from "react";
import ThermostatRoundedIcon from "@mui/icons-material/ThermostatRounded";

export default function DeviceStatus() {
  return (
    <div className="bg-gray-200 max-w-52 p-3 flex rounded-lg">
      <div className="size-16 flex items-center justify-center">
        <ThermostatRoundedIcon sx={{ fontSize: 52 }} />
      </div>
      <div className="flex flex-col justify-between w-32">
        <div className="text-sm">device 1</div>
        <div className="text-[0.7rem] font-light truncate">
          Temperature & Humidityxxxxxxxxxxxxxx
        </div>
        <div className="text-[0.7rem] rounded-full bg-gray-300 py-0.1 px-2 w-16 flex justify-center ">
          offline
        </div>
      </div>
    </div>
  );
}
