import "./App.css";
import { useState, useEffect } from "react";
import Cards from "./Cards";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState([]); // where to store the returned data
  const [error, setError] = useState(null); // where to store the coming errors
  useEffect(() => {
    function fetchData() {
      // the function to fetch data from the api
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          return res.json();
        })
        .then((res) => setData(res))
        .catch((err) => {
          setError(err);
          console.log(err);
        });
       
    }
   
    fetchData();
  }, []);
 
  return (
    <div
      className="Container"
      style={{
        margin:'auto',
        width: "1000px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
       
      }}
    >
      {data.length > 0 && data.map((elt) => (
        <Cards key={elt.id} dat={elt} />
      ))}
    </div>
  );
}

export default App;
