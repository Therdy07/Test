import React, { useState } from "react";
import Axios from "axios";
import { FaTimes } from "react-icons/fa";

function LoginModal({ closeModal }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    Axios.post("https://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

  return (
    <div className="dialog row" style={{ flexDirection: "row" }}>
      <div className="container row" style={{ maxWidth: 450 }}>
        <button
          className="close-button button"
          onClick={() => closeModal(false)}
          style={{ background: "rgb(43, 54, 84)" }}
        >
          <FaTimes ata-v-e56d064c="" className="fa-solid fa-times" />
        </button>
        <div data-v-3cbac5fa="" className="container column">
          <div data-v-3cbac5fa="" className="logo row">
            <svg
              data-v-3cbac5fa=""
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 300 143.5"
              width={60}
              height={20}
              xmlSpace="preserve"
            >
              <g>
                <path
                  fill="#ffffff"
                  d="M237,49.3v-4.5c0-3.7,2.8-3.5,4.1-3.5h34.3c5.7,0,10.2-4.6,10.2-10.2v-2.2c0-5.7-4.6-10.2-10.2-10.2h-43.3
    c-13.3,0-25.7,7.4-25.7,25.2v5.3V56v2.2v3.1v4.3c0-0.4,0.1-0.6,0.1-0.8c1.3,13,9.8,19.5,19.9,21.2c1.8,0.4,3.6,0.5,5.5,0.5h16.6
    h5.1c0.6,0.4,1.1,0.8,1.2,1.8c0.1,0.4,0.1,0.7,0.1,1.2v3.4v7.8v3.4c0,3.7-2.8,3.5-4.1,3.5l-44.5,0.4l-66.9-0.2h-5.4
    c-3.3,0-5.8-2.7-5.8-5.8v-9.5c0-3,2.3-5.5,5.3-5.8h11.4h37.2c9.3,0,15.7-8.7,15.7-17.6V40.1c0-15.7-6.7-21.3-19.8-21.3h-46.5
    c-18.2,0-27.6,7.3-27.6,26.9v38c0,24,0.1,41.3,23.7,45.8c0.6,0.1,1.2,0.1,1.9,0.1l76.5,0.6h53.4c13.3,0,25.7-7.4,25.7-25.2v-4.2
    v-7.8v-4.2c0-1.2-0.1-2.4-0.1-3.5c-1.3-13-9.8-19.5-19.9-21.2c-1.8-0.4-3.6-0.5-5.5-0.5h-21.7c-0.7-0.5-1.3-1.3-1.3-3V56v-6.7H237z
     M128.6,45.6c0-2.7,2.2-4.8,4.8-4.8h10.7h2.3h26.5c2.7,0,4.8,2.2,4.8,4.8v16.3c0,2.7-2.2,4.8-4.8,4.8h-13c-0.2,0-1.3,0-1.7,0h-11.8
    h-2.3h-10.7c-2.7,0-4.8-2.2-4.8-4.8V45.6z"
                  className="st0"
                />
                <path
                  fill="#ffe588"
                  d="M95.4,19.9H77.1c-1.6,0-3,0.8-3.7,2.3L52.8,61.1l-21-38.9c-0.7-1.3-2.2-2.3-3.7-2.3H9.4c-1.4,0-2.9,0.8-3.6,2
    c-0.7,1.3-0.7,2.9,0,4.2l34,60v38.8c0,2.3,1.9,4.2,4.2,4.2h16.7c2.3,0,4.2-1.9,4.2-4.2V86.1l34-60c0.7-1.3,0.7-2.9,0-4.2
    C98.3,20.7,96.9,19.9,95.4,19.9z"
                  className="st0"
                />
              </g>
            </svg>
          </div>
          <div data-v-3cbac5fa="" className="form-wrap column">
            <div data-v-3cbac5fa="" className="form column">
              <input
                data-v-5b7f4dd8=""
                data-v-3cbac5fa=""
                type="text"
                placeholder="Enter your ID"
                inputMode="text"
                className="input"
                name="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <input
                data-v-5b7f4dd8=""
                data-v-3cbac5fa=""
                type="password"
                placeholder="Enter your password"
                inputMode="text"
                className="input"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                data-v-3cbac5fa=""
                className="login-btn button block"
                style={{ height: 40 }}
                type="submit"
                onClick={login}
              >
                <span data-v-3cbac5fa="" className="text">
                  Login
                </span>
              </button>
            </div>
            <div data-v-3cbac5fa="" className="spacer" />
            <div data-v-3cbac5fa="" className="column" style={{ height: 90 }}>
              <div data-v-3cbac5fa="" className="row" style={{ height: 30 }}>
                <span data-v-3cbac5fa="" className="text">
                  Did you lose your password?
                </span>
                <div data-v-027ff9dc="" data-v-3cbac5fa="" className="row">
                  <div className="row">
                    <button
                      data-v-3cbac5fa=""
                      className="margin-left-5 button text"
                      style={{
                        color: "rgb(255, 229, 136)",
                        background: "transparent",
                      }}
                    >
                      <div
                        data-v-3cbac5fa=""
                        className="text"
                        style={{ height: 30 }}
                      >
                        Find password
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div data-v-3cbac5fa="" className="row" style={{ height: 60 }}>
                <div data-v-3cbac5fa="" className="text">
                  Without logging in, you can leave a message for the
                  administrator
                </div>
                <div data-v-01802de4="" data-v-3cbac5fa="" className="row">
                  <div className="row">
                    <button
                      data-v-3cbac5fa=""
                      className="margin-left-5 button text"
                      style={{
                        color: "rgb(255, 229, 136)",
                        background: "transparent",
                      }}
                    >
                      <div data-v-3cbac5fa="" className="text">
                        Guest Inquiry
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
