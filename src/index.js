import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [category, setCategory] = useState("");
  const [count, setCount] = useState("");

  async function fetchLists() {
    const BASE_URL = "http://jsonplaceholder.typicode.com";
    try {
      let response = await fetch(`${BASE_URL}/${category}`, {
        method: "GET",
      });
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  // ทุกครั้งที่ State เปลี่ยน useeffect จะทำงาน
  /*
  useEffect(() => {
    console.log("Even body");
  });
  */
  // every render,rerender
  // Syntax : useEffect(setUp,depenciesArray)

  /*
  useEffect(() => {
    console.log("Effect count");
  }, [count]);
*/
  // 1. console.log("1"); 2. state 3. useEffect 4. state มาก่อน  useEffect ถึงทำงาน
  //DEFINE Fn
  // CALL FN

  /*
  useEffect(() => {
    console.log(`useEffect ${category}`);
    //if (category !== "") fetchLists();
  }, [category]); // <<= category ไม่เปลี่ยน ไม่รัน
*/

  /*
  useEffect(() => {
    console.log(`useEffect ${category}`);
    //if (category !== "") fetchLists();
  }, [category, count]); <<= category และ count ไม่เปลี่ยน ไม่รัน
*/
  /*
  useEffect(() => {
    console.log(`Only First Render`);
    //if (category !== "") fetchLists();
  }, []); // <<< ว่าง จะรันแค่ครั้งแรกตอน npm run start 
*/

  return (
    <div>
      <h1>Effect-hook : {category || "not-select"}</h1>
      <div className="botton__group">
        <button onClick={() => setCategory("posts")}>posts</button>
        <button onClick={() => setCategory("photos")}>photos</button>
        <button onClick={() => setCategory("todos")}>todos</button>
        <button onClick={() => setCategory("users")}>users</button>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <div>{count}</div>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
      </div>

      <ul className="lists">
        <li className="lists__item">item-1</li>
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
