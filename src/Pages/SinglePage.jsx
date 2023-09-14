import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const SinglePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPlaceData = async () => {
      try {
        const response = await axios.get(`/api/postdataid/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching place data:", error);
      }
    };

    fetchPlaceData();
  }, [id]);

  if (!post) return null;
  return (
    <div>
      <Container className="mt-5">
        <Card>
          <Card.Body>
            <h1>{post.title}</h1>
            <p className="fs-5 my-5">{post.description}</p>
            <Card.Text className="text-muted fs-4">
              Author: {post.author}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default SinglePage;
