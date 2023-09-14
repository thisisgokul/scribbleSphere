import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";

const IndexPage = () => {
  const [allpost, setAllPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/allpostdata")
      .then(({ data }) => {
        setAllPosts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {allpost.map((post, index) => {
          if (post.title || post.caption || post.author || post.description) {
            return (
              <div
                key={index}
                className="col-xs-12 col-md-4 d-flex justify-content-center my-4"
              >
                <Card style={{ width: "28rem" }}>
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {post.caption}
                    </Card.Subtitle>
                    <h6>By {post.author}</h6>
                    <Link to={"/singlepage/" + post._id}>
                      {" "}
                      <Button variant="primary">View more...</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default IndexPage;
