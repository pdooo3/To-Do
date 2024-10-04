import { useEffect, useState } from "react";
import "./style.css";
const App = () => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [state, setState] = useState("stop");
  var timer;
  var sOrS = true;

  useEffect(() => {
    if (sOrS) {
      timer = setInterval(() => {
        setSec(sec + 1);
        if (sec === 59) {
          setMin(min + 1);
          setSec(0);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  });

  return (
    <>
      <progress value={sec} max={59}></progress>
      <h1>
        {min < 10 ? "0" + min : min}:{sec < 10 ? "0" + sec : sec}
      </h1>
      <button
        onClick={() => {
          setSec(0);
          setMin(0);
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
            setSec(sec + 1);
            if (sec == 59) {
              setMin(min + 1);
              setSec(0);
            }
          }
        }}
      >
        stop start
      </button>
    </>
  );
};
export default App;
