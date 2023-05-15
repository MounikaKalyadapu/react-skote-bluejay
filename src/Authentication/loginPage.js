import axios from "axios";
import { useState } from "react";
import "./loginPage.scss";
import { Navigate, useNavigate } from "react-router-dom";
const baseUrl = " http://localhost:3030";
function LoginPage() {
  const navigate = useNavigate();
  const [buttonDetail, setButtonDetail] = useState("Login");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const changeButtonName = () => {
    if (buttonDetail === "Login") {
      setButtonDetail("Sign Up");
    } else {
      setButtonDetail("Login");
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (
      userEmail.includes("@") &&
      userEmail.includes(".") &&
      userEmail.length > 6 &&
      password.length > 8
    ) {
      setErrorMessage("");
      if (buttonDetail === "Login") {
        let matchedData;
        axios.get(`${baseUrl}/users`).then((res) => {
          const response = res.data;
          console.log("in success")
          matchedData = response.filter((data) => userEmail === data.userEmail);
          if (!matchedData) {
            setErrorMessage("Invalid Email! Want to SignUp");
          }
          if (!(matchedData[0].password === password)) {

            setErrorMessage("Invalid Credentials");
          } else {
            setErrorMessage("");

            localStorage.setItem("userEmail", userEmail);
            localStorage.setItem("dateLoggedInWithTime",JSON.stringify(new Date()));

            navigate("/");
          }
        }).catch((error)=>{
          console.log(error.message);
          setErrorMessage(error.message);
        });
      } else {
        const userObject = {
          id: Math.floor(Math.random() * 1000),
          userEmail,
          password,
        };
        let matchedData;
        axios.get(`${baseUrl}/users`).then((res) => {
          const response = res.data;
          matchedData = response.filter((data) => userEmail === data.userEmail);
          if (matchedData.length > 0) {
            setErrorMessage("Account Existed, Want to Login??");
          } else {
            setErrorMessage("");
            axios.post(`${baseUrl}/users`, userObject).then((res) => {
              const response = res.data;
              localStorage.setItem("userEmail", response.userEmail);
              localStorage.setItem("dateLoggedInWithTime",JSON.stringify(new Date()));

              navigate("/");
            }).catch(error=>setErrorMessage(error.message));
          }
        }).catch(error=>setErrorMessage(error.message));
      }

    } else {
      setErrorMessage("Please Enter Valid Details....");
    }
  };
  return (
    <div className="authPage">
      <div className="loginPage">
        <div className="applicationTitle">BLUE JAY</div>
        <div className="errorMessage"> {errorMessage ? errorMessage : ""}</div>
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              value={userEmail}
              onChange={(event) => setUserEmail(event.target.value)}
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button className="btn btn-primary buttonStyle">
            {buttonDetail}
          </button>
        </form>
        <div className="info">
          <div>
            {buttonDetail === "Sign Up" ? "Have a Account? " : "Not a Member?"}{" "}
            <button className="signUpNow" onClick={changeButtonName}>
              {buttonDetail === "Sign Up" ? "Login" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
