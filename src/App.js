import "./App.css";
import AlphaNumericPsd from "./component/AlphaNumericPsd";
import Counter from "./component/Counter";
import PasswordMatch from "./component/PasswordMatch";
import TweetCount from "./component/TweetCount";

function App() {
  return (
    <div className="App">
      <Counter /> <hr />
      <TweetCount /> <hr />
      <PasswordMatch /> <hr />
      <AlphaNumericPsd /> <hr />

    </div>
  );
}

export default App;
