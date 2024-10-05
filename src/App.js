import { useEffect, useState } from "react";
import "./style.css";
const App = () => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [milSec, setMilSec] = useState(0);

  var timer;
  var sOrS = true;
  useEffect(() => {
    timer = setInterval(() => {
      setMilSec(milSec + 1);
      if (milSec >= 99) {
        setSec(sec + 1);
        setMilSec(0);
        if (sec >= 59) {
          setMin(min + 1);
          setSec(0);
        }
      }
    }, 1);
    return () => clearInterval(timer);
  }, [milSec]);
  return (
    <>
      <progress value={milSec} max={100}></progress>

      <h1>
        {min < 10 ? "0" + min : min}:{sec < 10 ? "0" + sec : sec}:
        {milSec < 10 ? "0" + milSec : milSec}
      </h1>
      <button
        onClick={() => {
          setSec(0);
          setMin(0);
          setMilSec(0);
        }}
      >
        reset time
      </button>
      <button
        onClick={() => {
          if (sOrS) {
            clearInterval(timer);
            sOrS = false;
          } else {
            setMilSec(milSec + 1);
          }
        }}
      >
        stop start
      </button>
    </>
  );
};
export default App;
