import logo from "./logo.svg";
import "./App.css";
import Table from "./Table";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log("jjjjjjjjjj");
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="app">
      //* Osama : If we want to apply a search
      <input className="search" placeholder="Search..." onChange={(e) => setQuery(e.target.value.toLowerCase())} />
      {<Table data={data} />}
    </div>
  );
}

export default App;
