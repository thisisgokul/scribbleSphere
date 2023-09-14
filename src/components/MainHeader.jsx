import React from "react";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";

const MainHeader = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Navbar className="bg-success">
      <Container>
        <Link to={"/"}>
          <h1 className="text-white fs-4 font-weight-bold">ScribbleSphere</h1>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {user ? (
              <div className="d-flex">
                <h3 className="text-white mt-1">{user.name} </h3>
                <Link to={"/profile"}>
                  <FaUserCircle className="text-white mx-2 mt-1" size={32} />
                </Link>
              </div>
            ) : (
              <div className="d-flex">
                <h3 className="text-white mt-1">login/signup </h3>
                <Link to={"/login"}>
                  <AiOutlineLogin className="text-white mx-2 mt-1" size={36} />
                </Link>
              </div>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainHeader;
