import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaUserCircle } from "react-icons/fa";
import AccountNav from "../components/AccountNav";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.post("/api/logout");
      dispatch(logout());
      localStorage.removeItem("userData");
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get("/api/profile");
       
        if (!data) {
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (!user) {
      navigate("/login");
    } else {
      fetchProfile();
    }
  }, [user, navigate]);
  return (
    <div>
      <AccountNav />
      <div className="container">
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <Card style={{ width: "28rem" }} className=" bg-dark text-white">
            <Card.Body className=" d-flex flex-column justify-content-center align-items-center">
              <FaUserCircle size={55} className="my-3" />
              {user ? (
                <Card.Title className="my-3 fs-2">
                  Welcome {user.name}
                </Card.Title>
              ) : (
                <Card.Title className="my-3 fs-2">Welcome</Card.Title>
              )}

              <Button variant="info" onClick={handleLogout}>
                Logout
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
