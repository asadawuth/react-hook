import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [category, setCategory] = useState("not-select");
  const [data, setData] = useState([]);

  async function fetchLists() {
    try {
      let resopnse = await fetch(
        `https://jsonplaceholder.typicode.com/${category}`
      );
      let datajson = await resopnse.json();
      console.log(datajson);
      setData(datajson);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (category !== "not-select") {
      fetchLists();
    }
  }, [category]);
  /*
  useEffect(() => {
    // fetchUserProfile
    console.log("effect");
  }); ทำงานแค่ครั้งแรก ตอน npm start
  */
  /*
  useEffect(() => {
    // fetchUserProfile
    console.log("effect run", category);
  }, [category]);
  console.log("Render", category);
*/
  return (
    <div>
      <h1>Effect-hook : {category || "not-select"}</h1>
      <div className="botton__group">
        <button onClick={() => setCategory("posts")}>posts</button>
        <button onClick={() => setCategory("users")}>users</button>
      </div>

      <ul className="lists">
        {data.map((obj) => (
          <li className="lists__item" key={obj.id}>
            {obj.body || obj.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

/*
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
  */
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
