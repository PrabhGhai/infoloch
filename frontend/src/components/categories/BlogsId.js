import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
const BlogsId = ({ id }) => {
  const [Blog, setBlog] = useState();
  const fetchData = async () => {
    await axios
      .get(`${window.location.origin}/api/cat/${id}`)
      .then((res) => setBlog(res.data.categories));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container d-flex justify-content-start my-2">
        <button
          style={{ border: "1px solid silver", backgroundColor: "white" }}
          className="p-1 px-3"
        >
          <Link
            to="/categories/all"
            style={{ textDecoration: "none", color: "black" }}
          >
            <AiOutlineArrowLeft /> Go Back
          </Link>
        </button>
      </div>
      <div
        className=" container d-flex  align-items-center flex-column"
        style={{ minHeight: "100vh" }}
      >
        {Blog ? (
          <>
            <h2 className="mb-5">{Blog.name} Blogs</h2>
            {Blog.blogs.length === 0 && (
              <h3 style={{ color: "red" }}>No Blogs Posted</h3>
            )}
            {Blog.blogs.map((item, index) => (
              <>
                <div className=" container mb-3 bg-white p-3">
                  <div className="container">
                    <p>
                      <Link
                        to={`/categories/all/author/${item.username._id}`}
                        style={{ textDecoration: "none", color: "silver" }}
                      >
                        {item.username.username}
                      </Link>
                    </p>
                  </div>
                  <div
                    className="container "
                    style={{ textAlign: "justify", textJustify: "inter-word" }}
                    key={index}
                  >
                    <h2>{item.title}</h2>
                  </div>
                  {item.photo && (
                    <div className=" container d-flex justify-content-center align-items-center my-3 blogs-img-div ">
                      <img className="img-fluid" src={item.photo} alt="/" />
                    </div>
                  )}

                  <div
                    className="container text-align-justify"
                    style={{ textAlign: "justify", textJustify: "inter-word" }}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></div>
                  {item.video && (
                    <div className=" container d-flex justify-content-center align-items-center my-3">
                      <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${item.video}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  )}
                </div>
              </>
            ))}
          </>
        ) : (
          <>Loading...</>
        )}
      </div>
    </>
  );
};

export default BlogsId;
