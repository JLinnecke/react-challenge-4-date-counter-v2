import { useState } from "react";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const date = new Date();
  date.setDate(date.getDate() + count);

  const displayDate = date.toDateString();

  return (
    <div style={style}>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>

        <span>{`${step}`}</span>
      </div>
      <div>
        <button onClick={() => setCount((s) => s - step)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={() => setCount((s) => s + step)}>+</button>
      </div>
      <p>
        {count === 0
          ? "Today is"
          : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was`}
        {displayDate}
      </p>
      {(step !== 1 || count !== 0) && (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
}
