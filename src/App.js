import "./App.css";
import AlphaNumericPsd from "./component/AlphaNumericPsd";
import Counter from "./component/Counter";
import DesignerTool from "./component/DesignerTool";
import PasswordMatch from "./component/PasswordMatch";
import ToDo from "./component/ToDo";
import TweetCount from "./component/TweetCount";

function App() {
  return (
    <div className="App">
      <ToDo /><hr />
      <Counter /> <hr />
      <TweetCount /> <hr />
      <PasswordMatch /> <hr />
      <AlphaNumericPsd /> <hr />
      <DesignerTool /> <hr />
      
    </div>
  );
}

export default App;
