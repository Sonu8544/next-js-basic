"use client";
import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/todos";

function fetchData() {
  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        console.log("Data is not fetched.");
        throw new Error("Failed to fetch data");
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

export default function DataFetching() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((result) => {
      if (result) {
        setData(result);
      }
    });
  }, []);

  return (
    <div>
      <h1>Data Fetching</h1>
      <ul>
        {data.map((item) => (
          <> 
          <li key={item.id}>
            <strong>user ID:</strong> {item.id} <br />
            <strong>Title:</strong> {item.title} <br />
            <strong>Completed:</strong> {item.completed ? "Yes" : "No"}
          </li>
          <br />
          </>
        ))}
      </ul>
    </div>
  );
}