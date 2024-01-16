import { useEffect } from "react";

function Timer({ dispatch, seconds }) {
  const min = Math.floor(seconds / 60);
  const second = seconds % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    //clean up
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}:{second < 10 && "0"}
      {second}
    </div>
  );
}

export default Timer;
