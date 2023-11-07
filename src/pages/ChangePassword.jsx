import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState("email");

  const onSubmit = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));

    if (step === "otp") {
      const body = {
        token,
        otp,
      };

      await axios
        .post(process.env.REACT_APP_VERIFY_OTP, body)
        .then((res) => {
          setStep("password");
          setOtp("");
        })
        .catch((err) => console.log(err));
    } else if (step === "password") {
      const body = {
        token,
        password,
      };

      await axios
        .post(process.env.REACT_APP_CHANGE_USER_PASSWORD, body)
        .then((res) => {
          localStorage.removeItem("token");
          setPassword("");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    } else {
      const body = {
        token,
        email,
      };

      await axios
        .post(process.env.REACT_APP_SEND_RESET_PASSWORD_LINK_EMAIL, body)
        .then((res) => {
          setStep("otp");
          setEmail("");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <section className="changePassword">
      <div className="container">
        <div className="row">
          {step === "otp" ? (
            <form className="form" onSubmit={onSubmit}>
              <input
                type="text"
                name="otp"
                value={otp}
                className="input"
                onChange={(e) => setOtp(e.target.value)}
              />
              <button className="btn">Send otp</button>
            </form>
          ) : step === "password" ? (
            <form className="form" onSubmit={onSubmit}>
              <input
                type="password"
                name="password"
                value={password}
                className="input"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="btn">Confirm password</button>
            </form>
          ) : (
            <form className="form" onSubmit={onSubmit}>
              <input
                type="email"
                name="email"
                value={email}
                className="input"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn">Send email</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
