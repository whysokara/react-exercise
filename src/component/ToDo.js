import { useState } from "react";

 const ToDo = () => {
  const [todoItem, setTodoItem] = useState("");
  const [itemList, setItemList] = useState([]);
  
  const addItem = () => {
    setItemList([...itemList, { text: todoItem, isDone: false }]);
    setTodoItem("");
  };
  const keyPressHandler = (e) => {
    if (e.charCode === 13) {
      addItem();
    }
  };
  const strikeThrough = (index) => {
    setItemList((oldItems) =>
      oldItems.map((item, indx) =>
        index === indx ? { ...item, isDone: !item.isDone } : item
      )
    );
  };
  return (
    <>
      <h2>Todo</h2>
      <input
        type="text"
        value={todoItem}
        placeholder="Enter new item"
        onChange={(e) => setTodoItem(e.target.value)}
        onKeyPress={keyPressHandler}
      />
      <button onClick={addItem}>Add</button>
      <h3>List</h3>
      {itemList.map((item, index) => (
        <div
          key={index}
          className="todoItems"
          style={item.isDone ? { textDecoration: "line-through" } : {}}
          onClick={() => strikeThrough(index)}
        >
          {item.text}
        </div>
      ))}
    </>
  );
};
export default ToDo