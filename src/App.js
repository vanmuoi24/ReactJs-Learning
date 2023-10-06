import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, settime] = useState(180);
  useEffect(() => {
    setInterval(() => {
      settime((post) => post - 0.5);
    }, 1000);
  }, []);

  return (
    <>
      <button>bấm giờ</button>
      <h1>{time}</h1>
    </>
  );
}

export default App;
