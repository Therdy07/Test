import React from "react";
import { useState } from "react";
import { GrPower } from "react-icons/gr";
import SignUp from "./SignUp";
import LoginModal from "./LoginModal";

export default function Sidebar() {
  const [openModal, setOpenModal] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <div data-v-5fa80d04="" className="drawer scrollable-auto column">
      <div
        data-v-c5df4256=""
        data-v-5fa80d04=""
        className="column"
        style={{ height: "100%" }}
      >
        <div
          data-v-c5df4256=""
          className="login-wrap column"
          style={{ flexShrink: "0" }}
        >
          <div
            data-v-3cbac5fa=""
            data-v-c5df4256=""
            className="row"
            style={{ flexDirection: "row" }}
          >
            <div
              className="row"
              style={{ width: "100%", flexDirection: "row" }}
            >
              <button
                data-v-c5df4256=""
                className="login-btn button"
                onClick={() => {
                  setOpenLogin(true);
                }}
                style={{ width: "100%", height: "60px" }}
              >
                <span data-v-c5df4256="" className="text">
                  <GrPower
                    data-v-e56d064c=""
                    data-v-c5df4256=""
                    className="margin-right-5 fa-regular fa-power-off"
                  />
                  Sign in
                </span>
              </button>
              {openLogin && <LoginModal closeModal={setOpenLogin} />}
            </div>
          </div>
        </div>

        <div
          data-v-c5df4256=""
          className="row"
          style={{
            height: "40px",
            flexDirection: "row",
            flexShrink: "0",
            alignItems: "center",
          }}
        >
          <span data-v-c5df4256="" className="margin-right-5 text">
            Aren't you a member yet?
          </span>
          <div
            data-v-0abb192f=""
            data-v-c5df4256=""
            className="row"
            style={{ flexDirection: "row" }}
          >
            <div
              className="row"
              style={{ width: "100%", flexDirection: "row" }}
            >
              <button
                data-v-c5df4256=""
                className="signUp-btn button text"
                onClick={() => {
                  setOpenModal(true);
                }}
                style={{ background: "transparent" }}
              >
                <span data-v-c5df4256="" className="text">
                  Sign Up
                </span>
              </button>
              {openModal && <SignUp closeModal={setOpenModal} />}
            </div>
          </div>
        </div>
        <div
          data-v-c5df4256=""
          className="margin-bottom-10 row"
          style={{ flexDirection: "row", flexShrink: "0" }}
        >
          <a data-v-c5df4256="" href="https://t.me..">
            <img
              data-v-c5df4256=""
              src="/assets/img/download.gif"
              alt=""
            />
          </a>
        </div>
        <div
          data-v-c5df4256=""
          className="column"
          style={{ flexGrow: "1", flexShrink: "0" }}
        >
          <div
            data-v-c096e1f2=""
            data-v-c5df4256=""
            className="tabs tabs-lg"
            style={{ flexGrow: "1" }}
          >
            <div data-v-c096e1f2="" className="tabs-header">
              <div
                data-v-c096e1f2=""
                className="tabs-header-item tabs-header-item-active tabs-header-item-fill"
                style={{
                  flexBasis: "0px",
                  bordeBottomColor: "rgb(255, 232, 185)",
                }}
              >
                Event
              </div>
            </div>
            <div data-v-c096e1f2="" className="tabs-content">
              <div
                data-v-73382a62=""
                data-v-c5df4256=""
                className="active"
                data-v-c096e1f2=""
              >
                <div
                  data-v-d71988de=""
                  data-v-c5df4256=""
                  className="promo-list column"
                  data-v-73382a62=""
                >
                  <div data-v-d71988de="" className="promo column">
                    <a
                      data-v-d71988de=""
                      href="/promo/12"
                      className="button text"
                      style={{ background: "transparent" }}
                    >
                      <img
                        data-v-d71988de=""
                        src="/assets/img/1.png"
                        alt="텔레그램 친구추가 이벤트"
                      />
                    </a>
                  </div>
                  <div data-v-d71988de="" className="promo column">
                    <a
                      data-v-d71988de=""
                      href="/promo/11"
                      className="button text"
                      style={{ background: "transparent" }}
                    >
                      <img
                        data-v-d71988de=""
                        src="/assets/img/2.png"
                        alt="실베터 이벤트"
                      />
                    </a>
                  </div>
                  <div data-v-d71988de="" className="promo column">
                    <a
                      data-v-d71988de=""
                      href="/promo/10"
                      className="button text"
                      style={{ background: "transparent" }}
                    >
                      <img
                        data-v-d71988de=""
                        src="/assets/img/3.png"
                        alt="다폴더 적중이벤트"
                      />
                    </a>
                  </div>
                  <div data-v-d71988de="" className="promo column">
                    <a
                      data-v-d71988de=""
                      href="/promo/9"
                      className="button text"
                      style={{ background: "transparent" }}
                    >
                      <img
                        data-v-d71988de=""
                        src="/assets/img/4.png"
                        alt="한폴더 낙첨이벤트"
                      />
                    </a>
                  </div>
                  <div data-v-d71988de="" className="promo column">
                    <a
                      data-v-d71988de=""
                      href="/promo/8"
                      className="button text"
                      style={{ background: "transparent" }}
                    >
                      <img
                        data-v-d71988de=""
                        src="/assets/img/5.png"
                        alt="신규가입 후 첫충전 보너스 이벤트"
                      />
                    </a>
                  </div>
                  <a
                    data-v-d71988de=""
                    href="/promo"
                    className="more-btn button"
                    style={{ background: "rgb(43, 54, 84)", height: "40px" }}
                  >
                    <span
                      data-v-d71988de=""
                      className="text"
                      style={{ height: "auto" }}
                    >
                      See more
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
