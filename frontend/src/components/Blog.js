import React from "react";
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
        {blog.photo && (
          <img
            className="img-fluid"
            src={blog.photo}
            alt="/"
            style={{ width: "100%", height: "200px", objectFit: "fill" }}
          />
        )}

        <div
          style={{
            textAlign: "justify",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
          className="mt-3"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        ></div>
      </div>
    </div>
  );
};

export default Blog;
