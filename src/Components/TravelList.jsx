import React, { useState } from "react";
import "./TravelList.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];
const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const TravelList = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
};

function Logo() {
  return <h1>Far Away</h1>;
}

function Form() {
  function hanldeSubmit(e) {
    e.preventDefault();

    const newItem = {description, quantity,packed:false,id:Date.now()}
    console.log(newItem)
  }
  const [description,setDescription]=useState("");
  const [quantity,setQuantity] = useState();

  return (
    <form className="add-form" onSubmit={(e) => hanldeSubmit(e)}>
      <h3>What do you need for your trip?</h3>

      <select name="" id="" value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
        {arr.map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input 
      type="text" 
      placeholder="item"
      value={description}
      onChange={(e) => {
        setDescription(e.target.value)
      }}
       />
      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ol>
        {initialItems.map((item, index) => (
          <Item item={item} key={index} />
        ))}
      </ol>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {item.quantity}
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em> You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}

export default TravelList;
