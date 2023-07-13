import React from "react";
import { GoCircleSlash } from "react-icons/go";
import { GrPower } from "react-icons/gr";
import { BiTrashAlt } from "react-icons/bi";

function SidebarPages() {
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
          style={{ flexShrink: 0 }}
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
                style={{ width: "100%", height: 60 }}
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
            </div>
          </div>
        </div>
        <div
          data-v-c5df4256=""
          className="row"
          style={{
            height: 40,
            flexDirection: "row",
            flexShrink: 0,
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
                style={{ background: "transparent" }}
              >
                <span data-v-c5df4256="" className="text">
                  Sign Up
                </span>
              </button>
            </div>
          </div>
        </div>
        <div
          data-v-c5df4256=""
          className="margin-bottom-10 row"
          style={{ flexDirection: "row", flexShrink: 0 }}
        >
          <a
            data-v-c5df4256=""
            href="https://t.me/yesbet"
            target="_blank"
            rel="noreferrer"
          >
            <img data-v-c5df4256="" src="/assets/img/download.gif" alt="" />
          </a>
        </div>
        <div
          data-v-c5df4256=""
          className="column"
          style={{ flexGrow: 1, flexShrink: 0 }}
        >
          <div
            data-v-c096e1f2=""
            data-v-c5df4256=""
            className="tabs tabs-lg"
            style={{ flexGrow: 1 }}
          >
            <div data-v-c096e1f2="" className="tabs-header">
              <div
                data-v-c096e1f2=""
                className="tabs-header-item tabs-header-item-active tabs-header-item-fill"
                style={{
                  flexBasis: 0,
                  borderBottomColor: "rgb(255, 232, 185)",
                }}
              >
                Betting Slip
              </div>
            </div>
            <div data-v-c096e1f2="" className="tabs-content">
              <div
                data-v-73382a62=""
                data-v-c5df4256=""
                className="active"
                data-v-c096e1f2=""
                style={{}}
              >
                <div
                  data-v-53cd5c09=""
                  data-v-c5df4256=""
                  className="betslip column"
                  data-v-73382a62=""
                >
                  <div
                    data-v-c096e1f2=""
                    data-v-53cd5c09=""
                    className="tabs tabs-sm"
                  >
                    <div data-v-c096e1f2="" className="tabs-header">
                      <div
                        data-v-c096e1f2=""
                        className="tabs-header-item tabs-header-item-inactive tabs-header-item-fill"
                        style={{
                          flexBasis: 0,
                          borderBottomColor: "rgb(255, 232, 185)",
                        }}
                      >
                        Single
                      </div>
                      <div
                        data-v-c096e1f2=""
                        className="tabs-header-item tabs-header-item-active tabs-header-item-fill"
                        style={{
                          flexBasis: 0,
                          borderBottomColor: "rgb(255, 232, 185)",
                        }}
                      >
                        Multi
                      </div>
                    </div>
                    <div data-v-c096e1f2="" className="tabs-content">
                      <div
                        data-v-73382a62=""
                        data-v-53cd5c09=""
                        className=""
                        data-v-c096e1f2=""
                        style={{ display: "none" }}
                      >
                        <div
                          data-v-5d0a773e=""
                          data-v-53cd5c09=""
                          className="column"
                          data-v-73382a62=""
                          style={{ height: "100%" }}
                        >
                          <div
                            data-v-5d0a773e=""
                            className="bet-list scrollable-auto column"
                          >
                            <div
                              data-v-5d0a773e=""
                              className="not-exist-item column"
                            >
                              <GoCircleSlash
                                data-v-e56d064c=""
                                data-v-5d0a773e=""
                                className="margin-bottom-20 fa-light fa-do-not-enter"
                              />
                              <span data-v-5d0a773e="" className="text">
                                The betting cart is empty
                              </span>
                            </div>
                          </div>
                          <div data-v-5d0a773e="" className="stake column">
                            <div
                              data-v-5d0a773e=""
                              className="row"
                              style={{ flexDirection: "row" }}
                            >
                              <button
                                data-v-5d0a773e=""
                                className="empty-all button text"
                                style={{ background: "transparent" }}
                              >
                                <BiTrashAlt
                                  data-v-e56d064c=""
                                  data-v-5d0a773e=""
                                  className="margin-right-5 fa-regular fa-trash"
                                />
                                Empty all
                              </button>
                            </div>
                            <div
                              data-v-5d0a773e=""
                              className="row"
                              style={{ flexDirection: "row" }}
                            >
                              <span
                                data-v-5d0a773e=""
                                className="desc-title text"
                              >
                                Total Amount
                              </span>
                              <div data-v-5d0a773e="" className="spacer" />
                              <span
                                data-v-5d0a773e=""
                                className="text"
                                style={{ color: "rgb(255, 229, 136)" }}
                              >
                                0
                              </span>
                            </div>
                            <div
                              data-v-5d0a773e=""
                              className="row"
                              style={{ flexDirection: "row" }}
                            >
                              <span
                                data-v-5d0a773e=""
                                className="desc-title text"
                              >
                                Est. Payout
                              </span>
                              <div data-v-5d0a773e="" className="spacer" />
                              <span
                                data-v-5d0a773e=""
                                className="text"
                                style={{ color: "rgb(255, 229, 136)" }}
                              >
                                0
                              </span>
                            </div>
                            <button
                              data-v-5d0a773e=""
                              className="bet-btn button"
                              style={{ color: "rgb(31, 36, 46)", height: 40 }}
                            >
                              Bet
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-73382a62=""
                        data-v-53cd5c09=""
                        className="active"
                        data-v-c096e1f2=""
                        style={{}}
                      >
                        <div
                          data-v-59a48a52=""
                          data-v-53cd5c09=""
                          className="column"
                          data-v-73382a62=""
                          style={{ height: "100%" }}
                        >
                          <div
                            data-v-59a48a52=""
                            className="bet-list slip-multi scrollable-auto column"
                          >
                            <div
                              data-v-59a48a52=""
                              className="not-exist-item column"
                            >
                              <i
                                data-v-e56d064c=""
                                data-v-59a48a52=""
                                className="margin-bottom-20 fa-light fa-do-not-enter"
                              />
                              <span data-v-59a48a52="" className="text">
                                The betting cart is empty
                              </span>
                            </div>
                          </div>
                          <div
                            data-v-59a48a52=""
                            className="stake column"
                            style={{ flexShrink: 0 }}
                          >
                            <div
                              data-v-59a48a52=""
                              className="row"
                              style={{ flexDirection: "row", flexShrink: 0 }}
                            >
                              <button
                                data-v-59a48a52=""
                                className="empty-all button text"
                                style={{ background: "transparent" }}
                              >
                                <i
                                  data-v-e56d064c=""
                                  data-v-59a48a52=""
                                  className="margin-right-5 fa-regular fa-trash"
                                />
                                Empty all
                              </button>
                            </div>
                            <div
                              data-v-59a48a52=""
                              className="row"
                              style={{ flexDirection: "row", flexShrink: 0 }}
                            >
                              <div
                                data-v-59a48a52=""
                                className="cash-updown row"
                                style={{ flexDirection: "row" }}
                              >
                                <button
                                  data-v-59a48a52=""
                                  className="down button"
                                >
                                  <i
                                    data-v-e56d064c=""
                                    data-v-59a48a52=""
                                    className="margin-right-0 fa-regular fa-minus"
                                  />
                                </button>
                                <button
                                  data-v-59a48a52=""
                                  className="up button"
                                >
                                  <i
                                    data-v-e56d064c=""
                                    data-v-59a48a52=""
                                    className="margin-right-0 fa-regular fa-plus"
                                  />
                                </button>
                              </div>
                              <input
                                data-v-5b7f4dd8=""
                                data-v-59a48a52=""
                                type="text"
                                placeholder="Amount"
                                inputMode="numeric"
                                className="input amount padding-horizontal-10"
                                style={{
                                  width: "100%",
                                  height: 35,
                                  backgroundColor: "rgb(49, 62, 96)",
                                  textAlign: "right",
                                  borderRight: "1px solid rgb(37, 46, 72)",
                                  borderLeft: "1px solid rgb(68, 81, 116)",
                                }}
                              />
                              <button
                                data-v-59a48a52=""
                                className="cash-init button"
                              >
                                <i
                                  data-v-e56d064c=""
                                  data-v-59a48a52=""
                                  className="margin-right-0 fa-regular fa-eraser"
                                />
                              </button>
                            </div>
                            <div
                              data-v-59a48a52=""
                              className="row"
                              style={{ flexDirection: "row", flexShrink: 0 }}
                            >
                              <span
                                data-v-59a48a52=""
                                className="desc-title text"
                              >
                                Total Odds
                              </span>
                              <div data-v-59a48a52="" className="spacer" />{" "}
                              <span
                                data-v-59a48a52=""
                                className="text"
                                style={{ color: "rgb(255, 229, 136)" }}
                              >
                                x 1.00
                              </span>
                            </div>
                            <div
                              data-v-59a48a52=""
                              className="row"
                              style={{ flexDirection: "row", flexShrink: 0 }}
                            >
                              <span
                                data-v-59a48a52=""
                                className="desc-title text"
                              >
                                Est. Payout
                              </span>
                              <div data-v-59a48a52="" className="spacer" />
                              <span
                                data-v-59a48a52=""
                                className="text"
                                style={{ color: "rgb(255, 229, 136)" }}
                              >
                                0
                              </span>
                            </div>
                            <button
                              data-v-59a48a52=""
                              className="bet-btn button"
                              style={{ color: "rgb(0, 0, 0)", height: 40 }}
                            >
                              Bet
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default SidebarPages;
