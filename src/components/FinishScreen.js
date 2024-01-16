import ReStart from "./ReStart";

function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const percent = (points / maxPoints) * 100;

  let emoji;

  if (percent === 100) emoji = "🥇";
  if (percent >= 80 && percent < 100) emoji = "🎉";
  if (percent >= 50 && percent < 80) emoji = "💥";
  if (percent >= 0 && percent < 50) emoji = "🙃";
  if (percent === 0) emoji = "🙅";

  return (
    <>
      <p className="result">
        {" "}
        <span>{emoji}</span>
        You Scored <strong>{points}</strong> out of {maxPoints} (
        {Math.round(percent)}%)
      </p>
      <p className="highscore">HighScore : {highscore} points</p>

      <ReStart dispatch={dispatch} />
    </>
  );
}

export default FinishScreen;
