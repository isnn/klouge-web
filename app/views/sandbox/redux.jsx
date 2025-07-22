import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../../redux/hay/counterSlice";
import { addItem, selectAllItem } from "../../redux/product/productSlice";
import ReduxOne from "./reduxOne";

export default function redux() {
  const count = useSelector((state) => state.counter.count);
  const products = useSelector((state) => state.product);
  console.log(products);

  const [incrementValue, setIncrementValue] = useState(0);
  const addValue = Number(incrementValue) || 0;
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  return (
    <div className="flex flex-col justify-center">
      <div className="text-4xl font-bold">count REDUX </div>
      <div className="rounded-full size-48 bg-amber-400 justify-center items-center flex">
        {count}
      </div>

      <div className="flex">
        <button
          onClick={() => dispatch(increment())}
          className="h-32 w-32 bg-emerald-200 m-0.5"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="h-32 w-32 bg-emerald-200 m-0.5"
        >
          -
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="h-32 w-32 bg-emerald-200 m-0.5"
        >
          reset
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(10))}
          className="h-32 w-32 bg-emerald-200 m-0.5"
        >
          +10
        </button>
        <div className="flex flex-col justify-center text-center">
          <input
            className="h-16 w-32 bg-emerald-200 m-0.5"
            value={incrementValue}
            onChange={(e) => setIncrementValue(e.target.value)}
          ></input>
          <button
            onClick={() => dispatch(incrementByAmount(addValue))}
            className="flex flex-grow items-center justify-center w-32 bg-emerald-200 m-0.5"
          >
            input
          </button>
        </div>
      </div>

      <div>PRODUCT</div>
      <div className="flex">
        <input
          type="text"
          className="h-12 w-32 bg-sky-300"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={() => dispatch(addItem({ title: title }))}
          className="ml-5 h-12 w-24 bg-sky-500"
        >
          submit
        </button>

        <ReduxOne></ReduxOne>
      </div>
      <div className="flex flex-col">
        {products?.items.map((item, index) => (
          <span key={index}>{item.title}</span>
        ))}
      </div>
    </div>
  );
}
