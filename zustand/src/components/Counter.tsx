import { useCounterStore } from "@/stores/useCounterStore";
import { useState } from "react";

export default function Counter() {
  const {
    count,
    onIncreaseCount,
    onDecreaseCount,
    onParameterCount
  } = useCounterStore();
  const [customCount, setCustomCount] = useState<number>(0);

  return (
    <div>
      <h2 style={{ color: "green" }}><em>{count}</em></h2>
      <div>
        <button onClick={() => onIncreaseCount()}>+1</button>
        <button onClick={() => onDecreaseCount()}>-1</button>
        <button onClick={() => onParameterCount(customCount)}>
          <input
           type="number"
           onChange={(e) => setCustomCount(+e.target.value)}
           style={{ width: "50px" }}
          />
          {` ?`}
        </button>
      </div>
    </div>
  );
}