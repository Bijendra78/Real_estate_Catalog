import React, { useState } from "react";
import "../styles/Login.css";
import logo from "../images/realstate.png"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../componants/Add_property/Loader"



const LogIn = () => {
  const [loader, Setloader] = useState(false)
  const [details, setDetails] = useState({
    userid: "",
    password: "",
  });
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault(e);
    Setloader(true)
    const { userid, password } = details;
    if (userid == "" || password == "") {
      alert("Email or paasword should not be empty")
    }
    // let url = "https://real-state-backend-6416.onrender.com/user/v1/login";
     let url ="http://localhost:8000/realEstate/login"
    axios
      .post(url, {
        mailID: userid, //email as previous 
        password: password,
      })
      .then((res) => {
        console.log(res.data.email)

        localStorage.setItem("email", res.data.email);
        localStorage.setItem("name", res.data.email);
        // localStorage.setItem("token", res.data.Token); // Modified to get token
        // localStorage.setItem("userId", res.data.userId);
        navigate("/home");
        Setloader(false)
      })
      .catch((err) => {
        console.log( "error found" , err)
        alert("Please enter correct Email or password")
        Setloader(false)
      });
  };

  return (
    <div style={{ backgroundColor: "#e1f9f4" }}>
      {loader ? <Loader /> :
        <div className="formdiv">
          <form
            onSubmit={(e) => onSubmit(e)}
            className="container formtag"
            style={{
              width: "450px",
              maxWidth: "90%",
              maxHeight: "90%",
              background: "#FFFFFF",
              color: "gray",
            }}
          >
            <h2 style={{ color: "#4C57B6", font: "Open Sans" }}>Fairmount Properties</h2>
            <img
              className="logo"
              alt="logo"
              style={{ Height: "100px", Width: "240px", height: "110px", width: "240px" }}
              src={logo}
            />

            <h6>  Enter your credentials to access</h6>
            <div className="input-group mb-3">
              <input
                style={{ margin: "0 10px", height: "56px" }}
                type="text"
                className="form-control"
                placeholder="User ID"
                aria-label="Email"
                value={details.userid}
                onChange={(e) =>
                  setDetails({ ...details, userid: e.target.value })
                }
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <input
                style={{ margin: "0 10px", height: "54px" }}
                type="password"
                id="myInput"
                value={details.password}
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </div>
            <button
              type="submit"
              onClick={(e) => {
                onSubmit(e);
              }}
              style={{
                backgroundColor: "#4C57B6",
                width: "95%",
                borderRadius: "10px",
                color: "wheat",
                padding: "5px 0"
              }}
            >
              LOGIN
            </button>
            <span className="linkform">
              <span style={{ color: "gray" }}>Don't have an account? </span>
              <Link to="/signup">Sign Up</Link>
            </span>
          </form>
        </div>
      }
    </div>
  );
};

export default LogIn;