import "./LoginPage.scss";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/joy/Link";
import Lottie from "lottie-react";
import friends from "../../assets/lottie/75531-friends.json";
import { HashLoader } from "react-spinners";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const phoneNumberInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (
      phoneNumberInputRef.current?.value !== "" &&
      passwordInputRef.current?.value !== ""
    ) {
      const token = phoneNumberInputRef.current!.value;
      localStorage.setItem("token", token);

      setIsLoading(true);

      setTimeout(() => {
        Swal.fire("Good job!", "Successfully Login", "success");
        setIsLoading(false);
        navigate("/chat");
      }, 2000);
    } else {
      Swal.fire({
        icon: "error",
        title: "Phone number and Password cannot empty",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="bg">
      <div className="login">
        <div className="login_img">
          <h1 className="login_img_logo">Chat Homey</h1>
          <Lottie animationData={friends} />
        </div>
        <div className="login_form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              id="standard-basic"
              label="Phone Number"
              variant="standard"
              className="my-text-field"
              inputRef={phoneNumberInputRef}
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              type="password"
              className="my-text-field"
              inputRef={passwordInputRef}
            />
            <Button variant="contained" type="submit">
              {isLoading == true && (
                <div className="exceptionbg">
                  <HashLoader color="#36d7b7" />
                </div>
              )}
              Login
            </Button>
          </form>
          <div className="signup">
            <p>Doesn't have an account yet?</p>
            <Link
              color="neutral"
              level="h6"
              underline="none"
              variant="plain"
              className="my-link"
              sx={{
                display: "inline-block",
                width: "100px",
              }}
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      <footer>
        <p>Chatdaddy React Frontend Test</p>
        <p>By Neza Yasser</p>
        <a href="https://nezaysr.tech" target="_blank">
          Visit my personal web
        </a>
      </footer>
    </div>
  );
};

export default Login;
