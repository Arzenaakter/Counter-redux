import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter); //counter - which is name from store.ts
  const dispatch = useAppDispatch();
  return (
    <div className=" h-screen w-full flex justify-center items-center">
      <div className="flex gap-10 border border-purple-300 bg-slate-50 p-10 rounded-md">
        <button
          onClick={() => dispatch(incrementByValue(5))}
          type="button"
          className="px-3 py-2 rounded-md bg-green-500 text-xl text-white"
        >
          Increment BY Value
        </button>
        <button
          onClick={() => dispatch(increment())}
          type="button"
          className="px-3 py-2 rounded-md bg-green-500 text-xl text-white"
        >
          Increment
        </button>
        <h1 className="text-3xl">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          type="button"
          className="px-3 py-2 rounded-md bg-red-500 text-xl text-white"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
