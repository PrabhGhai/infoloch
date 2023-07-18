import React, { useState } from "react";
import { Link } from "react-router-dom";
const Blog = ({ blog }) => {
  return (
    <div>
      <div className="container">
        <h3
          style={{
            fontWeight: "lighter",
            fontFamily: "sans-serif",
            textAlign: "justify",
          }}
        >
          {blog.title.slice(0, 50)}
        </h3>
        <img
          className="img-fluid"
          src={blog.photo}
          alt="/"
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <div style={{ textAlign: "justify" }} className="mt-3">
          {blog.description.slice(0, 400)}
        </div>
      </div>
    </div>
  );
};

export default Blog;
