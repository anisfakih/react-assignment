import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../../components/Product/Product";
import "./Dashboard.css";
const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  const data2 = data;

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="products-container">
        {data2.map((item) => {
          return (
            <Product
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              rate={item.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
