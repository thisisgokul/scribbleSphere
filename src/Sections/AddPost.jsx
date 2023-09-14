import React, { useEffect, useState } from "react";
import AccountNav from "../components/AccountNav";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/postdataid/${id}`).then((res) => {
      const { data } = res;
      setTitle(data.title);
      setCaption(data.caption);
      setAuthor(data.author);
      setDescription(data.description);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { title, caption, description, author };
    try {
      if (id) {
        await axios.put("/api/postupdate", { id, ...postData });
        alert("updated successfully");
        navigate("/mypost");
      } else {
        await axios.post("/api/createpost", { ...postData });
        alert("Post created");
        navigate("/mypost");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <AccountNav />
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-2 border-danger"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center">
                    Create an article
                  </h2>
                  <div className="mb-3">
                    <div className="mb-3">
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="Title">
                          <Form.Label className="text-center">Title</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Caption">
                          <Form.Label className="text-center">
                            Small Caption
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Caption"
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="author">
                          <Form.Label className="text-center">
                            Enter Author name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="ArticleText">
                          <Form.Label className="text-center">
                            Article Text
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={6}
                            placeholder="Write your article here"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </Form.Group>

                        <div className="d-grid">
                          <Button variant="danger" type="submit">
                            <h4>Post</h4>
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddPost;
