import Hero from "../components/Hero";
import About from "../components/About";
import Collections from "../components/Collections";
import ContactUs from "../components/ContactUs";
import React from "react";
import { Link, useOutletContext } from "react-router-dom";
export default function Home() {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=15",
        );
        if (!response.ok)
          throw new Error(`Failed to fetch data: Error ${response.status}`);
        const data = await response.json();

        console.log(data);
        const newData = data.map((product) => {
          return {
            ...product,
            colors: ["#f00", "#0f0", "#00f"],
            sizes: [36, 37, 38],
          };
        });
        console.log(newData);
        setData(newData);
        localStorage.setItem("data", JSON.stringify(newData));
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setData(JSON.parse(storedData));
      setLoading(false);
    } else {
      fetchData();
    }
  }, []);
  return (
    <div className="container">
      <Hero />
      <About />
      {loading ? <p>Loading...</p> : error ? <p>Error</p> : <Collections />}
      <ContactUs />
    </div>
  );
}
