import React, { useEffect, useState } from "react";
import AccountNav from "../components/AccountNav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Link } from "react-router-dom";

const MyPost = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      axios.get("/api/userpost").then(({ data }) => setData(data));
    } catch (error) {
      console.error("Error fetching user posts:", error);
    }
  }, []);

  const deletePost = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    try {
      if (confirmDelete) {
        await axios.delete(`/api/deletepost/${id}`);
        setData((prevPost) => prevPost.filter((prev) => prev._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <AccountNav />
      <div>
        <div className="container">
          {data.map((post) => (
            <Card key={post._id} className="my-4">
              <Card.Header>Your Articles</Card.Header>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.caption}</Card.Text>
                <Link to={"/addpost/" + post._id}>
                  <Button variant="primary">Edit</Button>
                </Link>

                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deletePost(post._id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPost;
