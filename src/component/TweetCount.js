import { useState } from "react";

const TweetCount = () => {
  const [tweetLen, setTweetLen] = useState(0);

  const countChar = (event) => {
    let msg = event.target.value;
    setTweetLen(msg.length);
  };
  return (
    <div>
      <h2>Tweet Length Limit</h2>
      <textarea placeholder="Tweet It !!!" onChange={countChar}></textarea>
      {tweetLen <= 280 ? (
        <button type="button">Tweet</button>
      ) : (
        <button type="button" disabled>
          Tweet
        </button>
      )}

      <div style={tweetLen > 280 ? { color: "red" } : { color: "black" }}>
        Characters Left: {280 - tweetLen}{" "}
      </div>
    </div>
  );
};

export default TweetCount