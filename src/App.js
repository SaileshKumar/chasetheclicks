import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const val = localStorage.getItem("count");
    if (val) {
      setCount(parseInt(val));
    }
  }, []);

  const onClick = () => {
    const newVal = count + 1;
    setCount(newVal);
    localStorage.setItem("count", newVal);
  };
  return (
    <>
      <div className="main-counter" id="main-counter">
        Result: {count}
      </div>
      <button id="button" onClick={onClick}>
        Like
      </button>
    </>
  );
}

export default App;
