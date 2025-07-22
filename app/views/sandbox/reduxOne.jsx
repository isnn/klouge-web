import React from "react";
import { useSelector } from "react-redux";

export default function reduxOne() {
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <div className="flex items-center justify-center ml-12 size-12 bg-indigo-400">
        {count}
      </div>
    </div>
  );
}
