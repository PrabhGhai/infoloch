import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
const Search = () => {
  const [Blog, setBlog] = useState();
  const [Query, setQuery] = useState();
  const fetchData = async () => {
    await axios
      .get(`${window.location.origin}/api/post`)
      .then((res) => setBlog(res.data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const change = (e) => {
    const { value } = e.target;
    setQuery(value);
    if (value == "") {
      setBlog("");
    }
  };

  return (
    <div>
      <div className="container" style={{}}>
        <div className="container my-2 d-flex justify-content-center align-items-center">
          <div className="me-2">
            <BsSearch />
          </div>
          <input
            type="search"
            className=""
            placeholder="Search..."
            onChange={change}
            value={Query}
            style={{
              border: "1px solid silver",
              outline: "none",
              width: "280px",
            }}
          />
        </div>
      </div>
      <div className="">
        <div className="" style={{ height: "100vh", overflowY: "scroll" }}>
          {Blog &&
            Blog.filter(
              (blog) =>
                blog.title.toLowerCase().includes(Query) ||
                blog.description.toLowerCase().includes(Query)
            ).map((item, index) => (
              <>
                <div className=" container mb-3 bg-white p-3">
                  <div className="container">
                    <p>{item.username.username}</p>
                  </div>
                  <div
                    className="container "
                    style={{
                      textAlign: "justify",
                      textJustify: "inter-word",
                    }}
                    key={index}
                  >
                    <h2>{item.title}</h2>
                  </div>
                  {item.photo && (
                    <div
                      className=" container d-flex justify-content-center align-items-center my-3 blogs-img-div "
                      style={{ width: "100%", height: "400px" }}
                    >
                      <img
                        className="img-fluid"
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "400px",
                        }}
                        src={item.photo}
                        alt="/"
                      />
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
        </div>
      </div>
    </div>
  );
};

export default Search;
