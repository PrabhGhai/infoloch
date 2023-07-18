import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Blog from "./Blog";
import "./Home.css";
import StepsforBlog from "./StepsforBlog";
import Homeheader from "./Homeheader";
const Home = () => {
  const [BlogData, setBlog] = useState();

  const fetchData = async () => {
    await axios.get(`${window.location.origin}/api/post`).then((res) => {
      const data = res.data;
      const slice = data.slice(0).reverse();
      setBlog(slice);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Homeheader />
      <StepsforBlog />

      <div className="container-fluid">
        <div className="  mt-5 pt-4">
          <h2 className="new pb-2">The Latest Blogs </h2>
        </div>
        <div className=" row">
          {BlogData &&
            BlogData.slice(0, 3).map((item, index) => (
              <div className="col-lg-4 p-3 " key={index}>
                <div
                  className="px-2 py-3"
                  style={{ border: "1px solid black" }}
                >
                  <Blog blog={item} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
