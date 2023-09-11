import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {
  incrementAsync,
  decrementAsync,
  increment,
  decrement,
} from "../features/counter/CounterSlice";
function CounterPage() {
  const { counter } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>{JSON.stringify(counter)}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementAsync(1))}>
        Async Increment
      </button>
      <button onClick={() => dispatch(decrementAsync(2))}>
        Async Decrement
      </button>
    </div>
  );
}

export default CounterPage;
