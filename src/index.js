import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// # 1 Input จาก User => React State()
// # 2 handle จังหวะsubmit
// # 3 Make HTTP Requset =< data
// # 4 data มา rander (React State)

const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDRhZDg0YTEzODRkMDRjNGY0YWVlMzZmNGE5YjE0OCIsInN1YiI6IjVlZWUwOTAwYjA0NjA1MDAzNDBlOTg2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H7gQK0dgqOvsQmsHsgtOmsqKVFmnb1urXF3q9AkqyCE";
function App() {
  const [keyword, setKeyword] = useState("");
  const [moiveList, setMoiveList] = useState([]);
  const [totalPage, setTotalPage] = useState([]);
  const handleSubmit = async (event) => {
    // กันจังหวะกด ไม่งั้น Refresh
    event.preventDefault();
    let url = `${BASE_URL}/search/keyword?query=${keyword}&page=1`;
    const option = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    };
    try {
      const response = await fetch(url, option);
      const data = await response.json();
      setMoiveList(data.results);
      setTotalPage(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <div className="header">
        <h1>Moive App</h1>
      </div>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="keyword ?"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">search</button>
      </form>

      <div>
        {Array.from(Array(totalPage).keys()).map((n) => (
          <button>{n + 1}</button>
        ))}
      </div>

      <div className="moive-lists">
        {moiveList.map((moive) => (
          <div key={moive.id} className="moive">
            {moive.name}
          </div>
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
