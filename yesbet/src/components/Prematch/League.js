import React, { useState } from "react";
import Stats from "./Stats";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { GrBookmark } from "react-icons/gr";
import { BsSortDownAlt, BsSortUpAlt } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import Soccer from "./Soccer";
import Basketball from "./Basketball";
import Baseball from "./Baseball";
import IceHockey from "./IceHockey";
import Tennis from "./Tennis";
import Handball from "./Handball";
import Boxing from "./Boxing";
import Rugby from "./Rugby";
import Aussie from "./Aussie";
import AmericanFootball from "./AmericanFootball";
import Snooker from "./Snooker";
import TableTennis from "./TableTennis";
import Cricket from "./Cricket";
import Darts from "./Darts";
import Volleyball from "./Volleyball";
import Waterpolo from "./Waterpolo";
import Futsal from "./Futsal";
import Squash from "./Squash";
import Mma from "./Mma";
import GaelicFootball from "./GaelicFootball";
import GaelicHurling from "./GaelicHurling";



function League() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div data-v-47fb79fe="" className="prematch scrollable-auto column">
        <div
          data-v-296bd5a2=""
          data-v-47fb79fe=""
          className="scroll-menu row"
          style={{ flexDirection: "row" }}
        >
          <div
            data-v-296bd5a2=""
            className="left row"
            style={{ flexDirection: "row" }}
          >
            <button data-v-296bd5a2="" className="button" />
          </div>
          <div
            data-v-05849275=""
            data-v-296bd5a2=""
            className="list scrollable-auto events row"
            style={{ flexDirection: "row" }}
          >
            <div
              data-v-296bd5a2=""
              className={
                toggleState === 1 ? "event column active" : "event column"
              }
              onClick={() => toggleTab(1)}
            >
              <button data-v-296bd5a2="" className="button">
                <div
                  data-v-296bd5a2=""
                  className="row"
                  style={{ flexDirection: "row" }}
                >
                  <img
                    alt=""
                    data-v-296bd5a2=""
                    src="https://assets.dashboard-yes.bet/img/1.e26e720.svg"
                    className="sports-icon"
                  />
                </div>
                <div
                  data-v-296bd5a2=""
                  className="margin-top-5 desc-text row"
                  style={{ flexDirection: "row" }}
                >
                  <span data-v-296bd5a2="" className="text">
                    Soccer
                  </span>
                </div>
              </button>
            </div>
            <div
              data-v-296bd5a2=""
              className={
                toggleState === 2 ? "event column active" : "event column"
              }
              onClick={() => toggleTab(2)}
            >
              <button data-v-296bd5a2="" className="button">
                <div
                  data-v-296bd5a2=""
                  className="row"
                  style={{ flexDirection: "row" }}
                >
                  <img
                    alt=""
                    data-v-296bd5a2=""
                    src="https://assets.dashboard-yes.bet/img/2.dba1d03.svg"
                    className="sports-icon"
                  />
                </div>
                <div
                  data-v-296bd5a2=""
                  className="margin-top-5 desc-text row"
                  style={{ flexDirection: "row" }}
                >
                  <span data-v-296bd5a2="" className="text">
                    Basketball
                  </span>
                </div>
              </button>
            </div>
            <div
              data-v-296bd5a2=""
              className={
                toggleState === 3 ? "event column active" : "event column"
              }
              onClick={() => toggleTab(3)}
            >
              <button data-v-296bd5a2="" className="button">
                <div
                  data-v-296bd5a2=""
                  className="row"
                  style={{ flexDirection: "row" }}
                >
                  <img
                    alt=""
                    data-v-296bd5a2=""
                    src="https://assets.dashboard-yes.bet/img/3.2b24d6d.svg"
                    className="sports-icon"
                  />
                </div>
                <div
                  data-v-296bd5a2=""
                  className="margin-top-5 desc-text row"
                  style={{ flexDirection: "row" }}
                >
                  <span data-v-296bd5a2="" className="text">
                    Baseball
                  </span>
                </div>
              </button>
            </div>
            <div
              data-v-296bd5a2=""
              className={
                toggleState === 4 ? "event column active" : "event column"
              }
              onClick={() => toggleTab(4)}
            >
              <button data-v-296bd5a2="" className="button">
                <div
                  data-v-296bd5a2=""
                  className="row"
                  style={{ flexDirection: "row" }}
                >
                  <img
                    alt=""
                    data-v-296bd5a2=""
                    src="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2NCA2NCIgdmlld0JveD0iMCAwIDY0IDY0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xIDI3LjR2OS4yYzAgMy40IDEzLjkgNi4xIDMxIDYuMXMzMS0yLjcgMzEtNi4xdi05LjJ6IiBmaWxsPSIjMWMxYjFiIi8+PHBhdGggZD0ibTMyIDQyLjNjLTE3LjEgMC0zMS0yLjctMzEtNi4xdi40YzAgMy40IDEzLjkgNi4xIDMxIDYuMXMzMS0yLjcgMzEtNi4xdi0uNGMwIDMuNC0xMy45IDYuMS0zMSA2LjF6IiBmaWxsPSIjMzgzODM4Ii8+PGVsbGlwc2UgY3g9IjMyIiBjeT0iMjcuNCIgZmlsbD0iIzFlMWUxZSIgcng9IjMxIiByeT0iNi4xIi8+PHBhdGggZD0ibTMyIDMyLjljLTE2LjYgMC0zMC4yLTIuNi0zMS01Ljh2LjNjMCAzLjQgMTMuOSA2LjEgMzEgNi4xczMxLTIuNyAzMS02LjFjMC0uMSAwLS4yIDAtLjMtLjggMy4yLTE0LjQgNS44LTMxIDUuOHoiIGZpbGw9IiMyZDJkMmQiLz48cGF0aCBkPSJtMzIgMjYuNmM1IDAgOS45LjIgMTMuNy43LjQgMCAuOC4xIDEuMi4xLS40IDAtLjguMS0xLjIuMS0zLjguNS04LjcuNy0xMy43LjdzLTkuOS0uMi0xMy43LS43Yy0uNCAwLS44LS4xLTEuMi0uMS40IDAgLjgtLjEgMS4yLS4xIDMuOC0uNSA4LjctLjcgMTMuNy0uN20wLTIuMWMtMTIuMSAwLTIxLjggMS4zLTIxLjggMi45czkuOCAyLjkgMjEuOCAyLjkgMjEuOC0xLjMgMjEuOC0yLjktOS43LTIuOS0yMS44LTIuOXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4="
                    className="sports-icon"
                  />
                </div>
                <div
                  data-v-296bd5a2=""
                  className="margin-top-5 desc-text row"
                  style={{ flexDirection: "row" }}
                >
                  <span data-v-296bd5a2="" className="text">
                    Ice Hockey
                  </span>
                </div>
              </button>
            </div>
            <div
              data-v-296bd5a2=""
              className={
                toggleState === 5 ? "event column active" : "event column"
              }
              onClick={() => toggleTab(5)}
            >
              <button data-v-296bd5a2="" className="button">
                <div
                  data-v-296bd5a2=""
                  className="row"
                  style={{ flexDirection: "row" }}
                >
                  <img
                    alt=""
                    data-v-296bd5a2=""
                    src="https://assets.dashboard-yes.bet/img/5.7ac0dec.svg"
                    className="sports-icon"
                  />
                </div>
                <div
                  data-v-296bd5a2=""
                  className="margin-top-5 desc-text row"
                  style={{ flexDirection: "row" }}
                >
                  <span data-v-296bd5a2="" className="text">
                    Tennis
                  </span>
                </div>
              </button>
            </div>
            <div
              data-v-296bd5a2=""
              className={
                toggleState === 6 ? "event column active" : "event column"
              }
              onClick={() => toggleTab(6)}
            >
              <button data-v-296bd5a2="" className="button">
                <div
                  data-v-296bd5a2=""
                  className="row"
                  style={{ flexDirection: "row" }}
                >
                  <img
                    alt=""
                    data-v-296bd5a2=""
                    src="https://assets.dashboard-yes.bet/img/6.7318639.svg"
                    className="sports-icon"
                  />
                </div>
                <div
                  data-v-296bd5a2=""
                  className="margin-top-5 desc-text row"
                  style={{ flexDirection: "row" }}
                >
                  <span data-v-296bd5a2="" className="text">
                    Handball
                  </span>
                </div>
              </button>
            </div>
            <div
              data-v-296bd5a2=""
              className={
                toggleState === 7 ? "event column active" : "event column"
              }
              onClick={() => toggleTab(7)}
            >
              <button data-v-296bd5a2="" className="button">
                <div
                  data-v-296bd5a2=""
                  className="row"
                  style={{ flexDirection: "row" }}
                >
                  <img
                    alt=""
                    data-v-296bd5a2=""
                    src="https://assets.dashboard-yes.bet/img/10.6f5a821.svg"
                    className="sports-icon"
                  />
                </div>
                <div
                  data-v-296bd5a2=""
                  className="margin-top-5 desc-text row"
                  style={{ flexDirection: "row" }}
                >
                  <span data-v-296bd5a2="" className="text">
                    Boxing
                  </span>
                </div>
              </button>
            </div>
            <div
              data-v-296bd5a2=""
              className={
                toggleState === 8 ? "event column active" : "event column"
              }
              onClick={() => toggleTab(8)}
            >
              <button data-v-296bd5a2="" className="button">
                <div
                  data-v-296bd5a2=""
                  className="row"
                  style={{ flexDirection: "row" }}
                >
                  <img
                    alt=""
                    data-v-296bd5a2=""
                    src="https://assets.dashboard-yes.bet/img/12.75e2172.svg"
                    className="sports-icon"
                  />
                </div>
                <div
                  data-v-296bd5a2=""
                  className="margin-top-5 desc-text row"
                  style={{ flexDirection: "row" }}
                >
                  <span data-v-296bd5a2="" className="text">
                    Rugby
                  </span>
                </div>
              </button>
            </div>
            <div
              data-v-296bd5a2=""
              className={
                toggleState === 9 ? "event column active" : "event column"
              }
              onClick={() => toggleTab(9)}
            >
              <button data-v-296bd5a2="" className="button">
                <div
                  data-v-296bd5a2=""
                  className="row"
                  style={{ flexDirection: "row" }}
                >
                  <img
                    alt=""
                    data-v-296bd5a2=""
                    src="https://assets.dashboard-yes.bet/img/13.846bd68.svg"
                    className="sports-icon"
                  />
                </div>
                <div
                  data-v-296bd5a2=""
                  className="margin-top-5 desc-text row"
                  style={{ flexDirection: "row" }}
                >
                  <span data-v-296bd5a2="" className="text">
                    Aussie Rules
                  </span>
                </div>
              </button>
            </div>
            <div
              data-v-296bd5a2=""
              className={
                toggleState === 10 ? "event column active" : "event column"
              }
              onClick={() => toggleTab(10)}
            >
              <button data-v-296bd5a2="" className="button">
                <div
                  data-v-296bd5a2=""
                  className="row"
                  style={{ flexDirection: "row" }}
                >
                  <img
                    data-v-296bd5a2=""
                    src="https://assets.dashboard-yes.bet/img/16.98844f6.svg"
                    className="sports-icon"
                    alt=""
                  />
                </div>
                <div
                  data-v-296bd5a2=""
                  className="margin-top-5 desc-text row"
                  style={{ flexDirection: "row" }}
                >
                  <span data-v-296bd5a2="" className="text">
                    American Football
                  </span>
                </div>
              </button>
            </div>
            <div
              data-v-296bd5a2=""
              className={
                toggleState === 11 ? "event column active" : "event column"
              }
              onClick={() => toggleTab(11)}
            >
              <button data-v-296bd5a2="" className="button">
                <div
                  data-v-296bd5a2=""
                  className="row"
                  style={{ flexDirection: "row" }}
                >
                  <img
                    alt=""
                    data-v-296bd5a2=""
                    src="https://assets.dashboard-yes.bet/img/19.18bcff6.svg"
                    className="sports-icon"
                  />
                </div>
                <div
                  data-v-296bd5a2=""
                  className="margin-top-5 desc-text row"
                  style={{ flexDirection: "row" }}
                >
                  <span data-v-296bd5a2="" className="text">
                    Snooker
                  </span>
                </div>
              </button>
            </div>
            <div
              data-v-296bd5a2=""
              className={
                toggleState === 12 ? "event column active" : "event column"
              }
              onClick={() => toggleTab(12)}
            >
              <button data-v-296bd5a2="" className="button">
                <div
                  data-v-296bd5a2=""
                  className="row"
                  style={{ flexDirection: "row" }}
                >
                  <img
                    alt=""
                    data-v-296bd5a2=""
                    src="https://assets.dashboard-yes.bet/img/20.b28de01.svg"
                    className="sports-icon"
                  />
                </div>
                <div
                  data-v-296bd5a2=""
                  className="margin-top-5 desc-text row"
                  style={{ flexDirection: "row" }}
                >
                  <span data-v-296bd5a2="" className="text">
                    Table Tennis
                  </span>
                </div>
              </button>
            </div>
            <div
              data-v-296bd5a2=""
              className={
                toggleState === 13 ? "event column active" : "event column"
              }
              onClick={() => toggleTab(13)}
            >
              <button data-v-296bd5a2="" className="button">
                <div
                  data-v-296bd5a2=""
                  className="row"
                  style={{ flexDirection: "row" }}
                >
                  <img
                    alt=""
                    data-v-296bd5a2=""
                    src="https://assets.dashboard-yes.bet/img/21.e247a0b.svg"
                    className="sports-icon"
                  />
                </div>
                <div
                  data-v-296bd5a2=""
                  className="margin-top-5 desc-text row"
                  style={{ flexDirection: "row" }}
                >
                  <span data-v-296bd5a2="" className="text">
                    Cricket
                  </span>
                </div>
              </button>
            </div>
            <div
              data-v-296bd5a2=""
              className={
                toggleState === 14 ? "event column active" : "event column"
              }
              onClick={() => toggleTab(14)}
            >
              <button data-v-296bd5a2="" className="button">
                <div
                  data-v-296bd5a2=""
                  className="row"
                  style={{ flexDirection: "row" }}
                >
                  <img
                    alt=""
                    data-v-296bd5a2=""
                    src="https://assets.dashboard-yes.bet/img/22.cadabff.svg"
                    className="sports-icon"
                  />
                </div>
                <div
                  data-v-296bd5a2=""
                  className="margin-top-5 desc-text row"
                  style={{ flexDirection: "row" }}
                >
                  <span data-v-296bd5a2="" className="text">
                    Darts
                  </span>
                </div>
              </button>
            </div>
            <div
              data-v-296bd5a2=""
              className={
                toggleState === 15 ? "event column active" : "event column"
              }
              onClick={() => toggleTab(15)}
            >
              <button data-v-296bd5a2="" className="button">
                <div
                  data-v-296bd5a2=""
                  className="row"
                  style={{ flexDirection: "row" }}
                >
                  <img
                    alt=""
                    data-v-296bd5a2=""
                    src="https://assets.dashboard-yes.bet/img/23.7105815.svg"
                    className="sports-icon"
                  />
                </div>
                <div
                  data-v-296bd5a2=""
                  className="margin-top-5 desc-text row"
                  style={{ flexDirection: "row" }}
                >
                  <span data-v-296bd5a2="" className="text">
                    Volleyball
                  </span>
                </div>
              </button>
            </div>
            <div
              data-v-296bd5a2=""
              className={
                toggleState === 16 ? "event column active" : "event column"
              }
              onClick={() => toggleTab(16)}
            >
              <button data-v-296bd5a2="" className="button">
                <div
                  data-v-296bd5a2=""
                  className="row"
                  style={{ flexDirection: "row" }}
                >
                  <img
                    alt=""
                    data-v-296bd5a2=""
                    src="https://assets.dashboard-yes.bet/img/26.311a058.svg"
                    className="sports-icon"
                  />
                </div>
                <div
                  data-v-296bd5a2=""
                  className="margin-top-5 desc-text row"
                  style={{ flexDirection: "row" }}
                >
                  <span data-v-296bd5a2="" className="text">
                    Waterpolo
                  </span>
                </div>
              </button>
            </div>
            <div
              data-v-296bd5a2=""
              className={
                toggleState === 17 ? "event column active" : "event column"
              }
              onClick={() => toggleTab(17)}
            >
              <button data-v-296bd5a2="" className="button">
                <div
                  data-v-296bd5a2=""
                  className="row"
                  style={{ flexDirection: "row" }}
                >
                  <img
                    alt=""
                    data-v-296bd5a2=""
                    src="https://assets.dashboard-yes.bet/img/29.0f8768e.svg"
                    className="sports-icon"
                  />
                </div>
                <div
                  data-v-296bd5a2=""
                  className="margin-top-5 desc-text row"
                  style={{ flexDirection: "row" }}
                >
                  <span data-v-296bd5a2="" className="text">
                    Futsal
                  </span>
                </div>
              </button>
            </div>
            <div
              data-v-296bd5a2=""
              className={
                toggleState === 18 ? "event column active" : "event column"
              }
              onClick={() => toggleTab(18)}
            >
              <button data-v-296bd5a2="" className="button">
                <div
                  data-v-296bd5a2=""
                  className="row"
                  style={{ flexDirection: "row" }}
                >
                  <img
                    alt=""
                    data-v-296bd5a2=""
                    src="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2NCA2NCIgdmlld0JveD0iMCAwIDY0IDY0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjMyIiBjeT0iMzIiIGZpbGw9IiM0ZDRkNGQiIHI9IjMxIi8+PGNpcmNsZSBjeD0iMjEuMyIgY3k9IjQzLjEiIGZpbGw9IiNmOWQ3MGQiIHI9IjIuMSIvPjxjaXJjbGUgY3g9IjE2LjciIGN5PSI0Ny4zIiBmaWxsPSIjZjlkNzBkIiByPSIxLjYiLz48cGF0aCBkPSJtNDMuMyAzLjFjMS40IDMuNSAyLjEgNy4zIDIuMSAxMS4zIDAgMTcuMS0xMy45IDMxLTMxIDMxLTQgMC03LjgtLjctMTEuMy0yLjEgNC41IDExLjUgMTUuOCAxOS43IDI4LjkgMTkuNyAxNy4xIDAgMzEtMTMuOSAzMS0zMSAwLTEzLjEtOC4yLTI0LjQtMTkuNy0yOC45eiIgb3BhY2l0eT0iLjA1Ii8+PHBhdGggZD0ibTQ5LjEgNi4xYzMuMiA0LjkgNS4xIDEwLjggNS4xIDE3LjEgMCAxNy4xLTEzLjkgMzEtMzEgMzEtNi4zIDAtMTIuMi0xLjktMTcuMS01LjEgNS42IDguNCAxNS4xIDEzLjkgMjUuOSAxMy45IDE3LjEgMCAzMS0xMy45IDMxLTMxIDAtMTAuOC01LjUtMjAuMy0xMy45LTI1Ljl6IiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4="
                    className="sports-icon"
                  />
                </div>
                <div
                  data-v-296bd5a2=""
                  className="margin-top-5 desc-text row"
                  style={{ flexDirection: "row" }}
                >
                  <span data-v-296bd5a2="" className="text">
                    Squash
                  </span>
                </div>
              </button>
            </div>
            <div
              data-v-296bd5a2=""
              className={
                toggleState === 19 ? "event column active" : "event column"
              }
              onClick={() => toggleTab(19)}
            >
              <button data-v-296bd5a2="" className="button">
                <div
                  data-v-296bd5a2=""
                  className="row"
                  style={{ flexDirection: "row" }}
                >
                  <img
                    alt=""
                    data-v-296bd5a2=""
                    src="https://assets.dashboard-yes.bet/img/117.c06a79e.svg"
                    className="sports-icon"
                  />
                </div>
                <div
                  data-v-296bd5a2=""
                  className="margin-top-5 desc-text row"
                  style={{ flexDirection: "row" }}
                >
                  <span data-v-296bd5a2="" className="text">
                    MMA
                  </span>
                </div>
              </button>
            </div>
            <div
              data-v-296bd5a2=""
              className={
                toggleState === 20 ? "event column active" : "event column"
              }
              onClick={() => toggleTab(20)}
            >
              <button data-v-296bd5a2="" className="button">
                <div
                  data-v-296bd5a2=""
                  className="row"
                  style={{ flexDirection: "row" }}
                >
                  <img
                    alt=""
                    data-v-296bd5a2=""
                    src="https://assets.dashboard-yes.bet/img/135.f111c33.svg"
                    className="sports-icon"
                  />
                </div>
                <div
                  data-v-296bd5a2=""
                  className="margin-top-5 desc-text row"
                  style={{ flexDirection: "row" }}
                >
                  <span data-v-296bd5a2="" className="text">
                    Gaelic Football
                  </span>
                </div>
              </button>
            </div>
            <div
              data-v-296bd5a2=""
              className={
                toggleState === 21 ? "event column active" : "event column"
              }
              onClick={() => toggleTab(21)}
            >
              <button data-v-296bd5a2="" className="button">
                <div
                  data-v-296bd5a2=""
                  className="row"
                  style={{ flexDirection: "row" }}
                >
                  <img
                    alt=""
                    data-v-296bd5a2=""
                    src="https://assets.dashboard-yes.bet/img/136.272b296.svg"
                    className="sports-icon"
                  />
                </div>
                <div
                  data-v-296bd5a2=""
                  className="margin-top-5 desc-text row"
                  style={{ flexDirection: "row" }}
                >
                  <span data-v-296bd5a2="" className="text">
                    Gaelic Hurling
                  </span>
                </div>
              </button>
            </div>
          </div>
          <div
            data-v-296bd5a2=""
            className="right row"
            style={{ flexDirection: "row" }}
          >
            <button data-v-296bd5a2="" className="button" />
          </div>
        </div>
        
        <div
          data-v-0e50b22a=""
          data-v-47fb79fe=""
          className="column"
          style={{ flexShrink: 0 }}
        >
          <div
            data-v-0e50b22a=""
            className="search row"
            style={{ flexDirection: "row" }}
          >
            <input
              data-v-5b7f4dd8=""
              data-v-0e50b22a=""
              type="text"
              placeholder="Please enter team name or league name."
              inputMode="text"
              className="input"
              style={{
                width: "100%",
                backgroundColor: "rgb(37, 46, 72)",
              }}
            />
            <button
              data-v-0e50b22a=""
              className="search-button button"
              style={{
                background: "rgb(37, 46, 72)",
                width: 40,
                height: 40,
              }}
            >
              <FaSearch
                data-v-e56d064c=""
                data-v-0e50b22a=""
                className="fa-solid fa-magnifying-glass"
              />
            </button>
          </div>
          <div
            data-v-0e50b22a=""
            className="settings row"
            style={{
              height: 40,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              data-v-58b5c95e=""
              data-v-0e50b22a=""
              className="row"
              style={{ flexDirection: "row" }}
            >
              <div
                className="row"
                style={{ width: "100%", flexDirection: "row" }}
              >
                <button
                  data-v-0e50b22a=""
                  className="select-tournament margin-right-10 button"
                  style={{ height: 35 }}
                >
                  <span data-v-0e50b22a="" className="text">
                    <GrBookmark
                      data-v-e56d064c=""
                      data-v-0e50b22a=""
                      className="margin-right-5 fa-regular fa-bookmark"
                    />
                    Select league
                  </span>
                </button>
              </div>
            </div>
            <button
              data-v-0e50b22a=""
              className="sort-time margin-right-10 button text active"
              style={{ background: "transparent" }}
            >
              <span data-v-0e50b22a="" className="text">
                <BsSortDownAlt
                  size="1rem"
                  data-v-e56d064c=""
                  data-v-0e50b22a=""
                  className="margin-right-5 fa-light fa-arrow-down-short-wide"
                />
                Sort time
              </span>
            </button>
            <button
              data-v-0e50b22a=""
              className="sort-league button text"
              style={{ background: "transparent" }}
            >
              <span data-v-0e50b22a="" className="text">
                <BsSortUpAlt
                  size="1rem"
                  data-v-e56d064c=""
                  data-v-0e50b22a=""
                  className="margin-right-5 fa-light fa-arrow-up-short-wide"
                />
                Sort league
              </span>
            </button>
            <div data-v-0e50b22a="" className="spacer" />
            <button
              data-v-0e50b22a=""
              className="refresh margin-left-10 button"
              style={{
                background: "rgb(37, 46, 72)",
                width: 40,
                height: "100%",
              }}
            >
              <FiRefreshCw
                data-v-e56d064c=""
                data-v-0e50b22a=""
                className="fa-solid fa-arrows-rotate"
              />
            </button>
          </div>
          <div
            data-v-0e50b22a=""
            className="viewSettingWrap row"
            style={{ height: 40, flexDirection: "row" }}
          >
            <button
              data-v-0e50b22a=""
              className="margin-right-10 button text active"
              style={{ background: "transparent" }}
            >
              <span data-v-0e50b22a="" className="text">
                Modern View
              </span>
            </button>
            <button
              data-v-0e50b22a=""
              className="button text"
              style={{ background: "transparent" }}
            >
              <span data-v-0e50b22a="" className="text">
                Asian View
              </span>
            </button>
            <div data-v-0e50b22a="" className="spacer" />
            <div
              data-v-0e50b22a=""
              dir="auto"
              className="v-select vs--single vs--unsearchable"
            >
              <div
                id="vs2__combobox"
                aria-controls=""
                role="combobox"
                aria-expanded="false"
                aria-owns="vs2__listbox"
                aria-label="Search for option"
                className="vs__dropdown-toggle"
              >
                <div className="vs__selected-options">
                  <span className="vs__selected">Winner</span>
                  <input
                    readOnly="readonly"
                    aria-autocomplete="list"
                    aria-labelledby="vs2__combobox"
                    aria-controls="vs2__listbox"
                    type="search"
                    autoComplete="off"
                    className="vs__search"
                  />
                </div>
                <div className="vs__actions">
                  <button
                    type="button"
                    title="Clear Selected"
                    aria-label="Clear Selected"
                    className="vs__clear"
                    style={{ display: "none" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={10}
                    >
                      <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" />
                    </svg>
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={10}
                    role="presentation"
                    className="vs__open-indicator"
                  >
                    <path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" />
                  </svg>
                  <div className="vs__spinner" style={{ display: "none" }}>
                    Loading...
                  </div>
                </div>
              </div>
              <ul
                id="vs2__listbox"
                role="listbox"
                style={{ display: "none", visibility: "hidden" }}
              />
            </div>
          </div>
        </div>
        <div data-v-47fb79fe="" className="prematch-list column modern">
          {toggleState === 1 && <Soccer />}
          {toggleState === 2 && <Basketball />}
          {toggleState === 3 && <Baseball />}
          {toggleState === 4 && <IceHockey />}
          {toggleState === 5 && <Tennis />}
          {toggleState === 6 && <Handball />}
          {toggleState === 7 && <Boxing />}
          {toggleState === 8 && <Rugby />}
          {toggleState === 9 && <Aussie />}
          {toggleState === 10 && <AmericanFootball />}
          {toggleState === 11 && <Snooker />}
          {toggleState === 12 && <TableTennis />}
          {toggleState === 13 && <Cricket />}
          {toggleState === 14 && <Darts />}
          {toggleState === 15 && <Volleyball />}
          {toggleState === 16 && <Waterpolo />}
          {toggleState === 17 && <Futsal />}
          {toggleState === 18 && <Squash />}
          {toggleState === 19 && <Mma />}
          {toggleState === 20 && <GaelicFootball />}
          {toggleState === 21 && <GaelicHurling />}
        </div>

        <div data-v-72e289f4="" data-v-47fb79fe="" className="pagination row">
          <div
            data-v-72e289f4=""
            className="row"
            style={{ flexDirection: "row" }}
          >
            <div
              data-v-72e289f4=""
              dir="auto"
              className="v-select vs--single vs--unsearchable"
              style={{ marginRight: 5 }}
            >
              <div
                id="vs3__combobox"
                role="combobox"
                aria-controls=""
                aria-expanded="false"
                aria-owns="vs3__listbox"
                aria-label="Search for option"
                className="vs__dropdown-toggle"
                style={{ height: 40 }}
              >
                <div className="vs__selected-options">
                  <span className="vs__selected">10</span>
                  <input
                    readOnly="readonly"
                    aria-autocomplete="list"
                    aria-labelledby="vs3__combobox"
                    aria-controls="vs3__listbox"
                    type="search"
                    autoComplete="off"
                    className="vs__search"
                  />
                </div>
                <div className="vs__actions">
                  <button
                    type="button"
                    title="Clear Selected"
                    aria-label="Clear Selected"
                    className="vs__clear"
                    style={{ display: "none" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={10}
                    >
                      <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" />
                    </svg>
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={10}
                    role="presentation"
                    className="vs__open-indicator"
                  >
                    <path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" />
                  </svg>
                  <div className="vs__spinner" style={{ display: "none" }}>
                    Loading...
                  </div>
                </div>
              </div>
              <ul
                id="vs3__listbox"
                role="listbox"
                style={{ display: "none", visibility: "hidden" }}
              />
            </div>
          </div>
          <div
            data-v-72e289f4=""
            className="row"
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <span
              data-v-72e289f4=""
              className="text"
              style={{ opacity: "0.6" }}
            >
              Show respectively
            </span>
          </div>
          <div data-v-72e289f4="" className="spacer" />
          <div
            data-v-72e289f4=""
            className="row"
            style={{ flexDirection: "row" }}
          >
            <div
              data-v-72e289f4=""
              dir="auto"
              className="v-select vs--single vs--unsearchable"
              style={{ marginRight: 5 }}
            >
              <div
                id="vs4__combobox"
                role="combobox"
                aria-controls=""
                aria-expanded="false"
                aria-owns="vs4__listbox"
                aria-label="Search for option"
                className="vs__dropdown-toggle"
                style={{ height: 40 }}
              >
                <div className="vs__selected-options">
                  <span className="vs__selected">1</span>
                  <input
                    readOnly="readonly"
                    aria-autocomplete="list"
                    aria-labelledby="vs4__combobox"
                    aria-controls="vs4__listbox"
                    type="search"
                    autoComplete="off"
                    className="vs__search"
                  />
                </div>
                <div className="vs__actions">
                  <button
                    type="button"
                    title="Clear Selected"
                    aria-label="Clear Selected"
                    className="vs__clear"
                    style={{ display: "none" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={10}
                    >
                      <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" />
                    </svg>
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={10}
                    role="presentation"
                    className="vs__open-indicator"
                  >
                    <path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" />
                  </svg>
                  <div className="vs__spinner" style={{ display: "none" }}>
                    Loading...
                  </div>
                </div>
              </div>
              <ul
                id="vs4__listbox"
                role="listbox"
                style={{ display: "none", visibility: "hidden" }}
              />
            </div>
          </div>
          <div
            data-v-72e289f4=""
            className="row"
            style={{ flexDirection: "row" }}
          >
            <button
              data-v-72e289f4=""
              className="button icon"
              disabled="disabled"
              style={{ background: "rgb(37, 46, 72)" }}
            >
              <RiArrowLeftSLine
                size="1.1rem"
                data-v-e56d064c=""
                data-v-72e289f4=""
                className="fa-solid fa-chevron-left"
              />
            </button>
          </div>
          <div
            data-v-72e289f4=""
            className="row"
            style={{ flexDirection: "row" }}
          >
            <button
              data-v-72e289f4=""
              className="button icon"
              style={{ background: "rgb(37, 46, 72)" }}
            >
              <RiArrowRightSLine
                size="1.1rem"
                data-v-e56d064c=""
                data-v-72e289f4=""
                className="fa-solid fa-chevron-right"
              />
            </button>
          </div>
        </div>
      </div>
      <Stats />
      {/* <div
        data-v-4fd76316=""
        data-v-47fb79fe=""
        className="markets scrollable-auto column prematch-markets"
      >
        <div
          data-v-4fd76316=""
          className="header row"
          style={{ flexDirection: "row", height: 40, alignItems: "center" }}
        >

          <div
            data-v-4fd76316=""
            className="league-detail row"
            style={{ flexDirection: "row" }}
          >
            <span data-v-4fd76316="" className="event text">
              <img alt=""
                data-v-4fd76316=""
                src="https://assets.dashboard-yes.bet/img/1.e26e720.svg"
                className="sports-icon margin-right-5"
              />
              Soccer
            </span>
            <span data-v-4fd76316="" className="dia text" />
            <span data-v-4fd76316="" className="league text">
              <div
                data-v-78fee962=""
                data-v-4fd76316=""
                className="tournament-icon row"
                style={{ flexDirection: "row" }}
              >
                <img alt=""
                  data-v-78fee962=""
                  src="https://mt-sportradar.com/assets/images/regions/48.png"
                />
              </div>
              Liga Profesional
            </span>
          </div>
        </div>
        <div
          data-v-4fd76316=""
          className="match-detail row"
          style={{ flexDirection: "row" }}
        >
          <span data-v-4fd76316="" className="time margin-right-10 text">
            <i
              data-v-e56d064c=""
              data-v-4fd76316=""
              className="margin-right-5 fa-regular fa-timer"
            />
            07/11 09:30
          </span>
          <div
            data-v-4fd76316=""
            className="team row"
            style={{ flexDirection: "row" }}
          >
            <div
              data-v-cc68f3fe=""
              data-v-4fd76316=""
              className="team-icon row"
              style={{ flexDirection: "row" }}
            >
              <img alt=""
                data-v-cc68f3fe=""
                src="https://img.mt-sportradar.com/ls/crest/big/3210.png"
                className=""
                style={{ height: 16 }}
              />
            </div>
            <span data-v-4fd76316="" className="text">
              CA Talleres de Cordoba
            </span>
          </div>
          <span
            data-v-4fd76316=""
            className="margin-horizontal-10 text"
            style={{ color: "rgb(255, 229, 136)" }}
          >
            vs
          </span>
          <div
            data-v-4fd76316=""
            className="team row"
            style={{ flexDirection: "row" }}
          >
            <div
              data-v-cc68f3fe=""
              data-v-4fd76316=""
              className="team-icon row"
              style={{ flexDirection: "row" }}
            >
              <img
                alt=""
                data-v-cc68f3fe=""
                src="https://img.mt-sportradar.com/ls/crest/big/3204.png"
                className=""
                style={{ height: 16 }}
              />
            </div>
            <span data-v-4fd76316="" className="text">
              Union de Santa Fe
            </span>
          </div>
        </div>
        <div
          data-v-4fd76316=""
          className="widget row"
          style={{ flexDirection: "row" }}
        >
          <div
            data-v-183c8283=""
            data-v-4fd76316=""
            className="iframe-view row"
            style={{ height: "174.135px", flexDirection: "row" }}
          >
            <iframe
              title='data-v-183c8283'
              data-v-183c8283=""
              src="https://mt-sportradar.com/headtohead/?matchId=38546319&lang=en&theme=yesbet"
              scrolling="no"
              style={{
                transform: "scale(0.92625)",
                transformOrigin: "0px 0px 0px",
                width: 800,
                height: 188
              }}
            />
          </div>
        </div>
        <div
          data-v-318c83ff=""
          data-v-4fd76316=""
          className="market-select-slider row"
          style={{ flexDirection: "row" }}
        >
          <div
            data-v-05849275=""
            data-v-318c83ff=""
            className="list scrollable-auto slider row"
            style={{ flexDirection: "row" }}
          >
            <span data-v-318c83ff="" className="text active">
              <button
                data-v-318c83ff=""
                className="button text"
                style={{ background: "transparent" }}
              >
                <span data-v-318c83ff="" className="text">
                  All
                </span>
              </button>
            </span>
            <span data-v-318c83ff="" className="text">
              <button
                data-v-318c83ff=""
                className="button text"
                style={{ background: "transparent" }}
              >
                <span data-v-318c83ff="" className="text">
                  Main
                </span>
              </button>
            </span>
            <span data-v-318c83ff="" className="text">
              <button
                data-v-318c83ff=""
                className="button text"
                style={{ background: "transparent" }}
              >
                <span data-v-318c83ff="" className="text">
                  Score
                </span>
              </button>
            </span>
            <span data-v-318c83ff="" className="text">
              <button
                data-v-318c83ff=""
                className="button text"
                style={{ background: "transparent" }}
              >
                <span data-v-318c83ff="" className="text">
                  First-half
                </span>
              </button>
            </span>
            <span data-v-318c83ff="" className="text">
              <button
                data-v-318c83ff=""
                className="button text"
                style={{ background: "transparent" }}
              >
                <span data-v-318c83ff="" className="text">
                  Second-half
                </span>
              </button>
            </span>
            <span data-v-318c83ff="" className="text">
              <button
                data-v-318c83ff=""
                className="button text"
                style={{ background: "transparent" }}
              >
                <span data-v-318c83ff="" className="text">
                  Corner
                </span>
              </button>
            </span>
            <span data-v-318c83ff="" className="text">
              <button
                data-v-318c83ff=""
                className="button text"
                style={{ background: "transparent" }}
              >
                <span data-v-318c83ff="" className="text">
                  Card
                </span>
              </button>
            </span>
            <span data-v-318c83ff="" className="text">
              <button
                data-v-318c83ff=""
                className="button text"
                style={{ background: "transparent" }}
              >
                <span data-v-318c83ff="" className="text">
                  Special
                </span>
              </button>
            </span>
            <span data-v-318c83ff="" className="text">
              <button
                data-v-318c83ff=""
                className="button text"
                style={{ background: "transparent" }}
              >
                <span data-v-318c83ff="" className="text">
                  Etc.
                </span>
              </button>
            </span>
          </div>
        </div>
        <div
          data-v-4fd76316=""
          className="market-wrap row"
          style={{ flexDirection: "row" }}
        >
          <div
            data-v-4fd76316=""
            className="market-list row"
            style={{ flexDirection: "row" }}
          >
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  1x2
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.68
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          draw
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.60
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          5.00
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  Handicap
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba (0)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.26
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe (0)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.60
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba (-0.5)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.67
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe (+0.5)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.10
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba (-1)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.20
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe (+1)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.61
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  Handicap 1:0
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba (1:0)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.15
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          draw (1:0)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          6.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe (1:0)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          13.00
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba (0:2)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          6.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          draw (0:2)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          4.80
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe (0:2)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.36
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba (0:1)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.85
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          draw (0:1)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.50
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe (0:1)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.10
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  Total
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 2
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.53
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 2
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.40
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.73
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 3
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.85
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 3
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.40
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  CA Talleres de Cordoba total
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 0.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.18
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 0.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          4.33
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 1.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.86
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 1.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.84
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.60
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.25
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  Union de Santa Fe total
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 0.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.64
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 0.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.15
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 1.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          4.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 1.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.20
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          9.50
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.02
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  Both teams to score
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          yes
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.96
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          no
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.75
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  Which team to score
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          none
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          10.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          only CA Talleres de Cordoba
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.60
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          only Union de Santa Fe
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          8.50
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          both teams
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.95
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  1st goal
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.52
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          none
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          10.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.85
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  Last goal
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.52
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          none
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          10.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.85
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  Exact goals
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          0
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          9.50
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          1
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          4.20
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          2
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.30
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          3
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          4.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          4
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          6.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          12.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          6+
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          19.00
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  CA Talleres de Cordoba exact goals
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          0
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          4.33
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          1
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.70
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          2
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.20
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          3+
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.50
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  Union de Santa Fe exact goals
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          0
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          1
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.30
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          2
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          5.20
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          3+
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          15.00
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  Highest scoring half
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          1st half
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.20
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          2nd half
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.10
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          equal
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.30
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  CA Talleres de Cordoba clean sheet
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          yes
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.15
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          no
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.64
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  Union de Santa Fe clean sheet
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          yes
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          4.33
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          no
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.18
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  CA Talleres de Cordoba to score in both halves
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          yes
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.80
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          no
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.38
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  Union de Santa Fe to score in both halves
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          yes
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          6.20
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          no
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.09
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  Both halves over 1.5
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          yes
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          5.80
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          no
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.10
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  Both halves under 1.5
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          yes
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.20
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          no
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.58
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  CA Talleres de Cordoba highest scoring half
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          1st half
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.30
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          2nd half
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.38
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          equal
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.65
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  Union de Santa Fe highest scoring half
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          1st half
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          4.20
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          2nd half
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.10
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          equal
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.82
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  Odd/even
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          odd
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.91
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          even
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.82
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  CA Talleres de Cordoba odd/even
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          odd
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.91
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          even
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.80
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  Union de Santa Fe odd/even
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          odd
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.25
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          even
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.58
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  Correct score
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          0:0
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          7.50
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          1:0
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          5.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          2:0
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          5.80
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          3:0
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          10.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          4:0
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          23.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          0:1
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          9.50
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          1:1
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          5.50
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          2:1
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          6.80
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          3:1
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          12.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          4:1
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          26.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          0:2
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          21.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          1:2
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          13.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          2:2
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          15.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          3:2
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          26.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          4:2
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          61.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          0:3
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          81.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          1:3
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          41.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          2:3
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          51.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          3:3
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          81.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          4:3
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          101.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          0:4
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          101.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          1:4
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          101.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          2:4
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          101.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          3:4
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          101.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          4:4
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          101.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          other
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          21.00
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  Halftime/fulltime
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba/CA Talleres de Cordoba
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.60
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba/draw
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          17.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba/Union de Santa Fe
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          67.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          draw/CA Talleres de Cordoba
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          4.50
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          draw/draw
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          5.50
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          draw/Union de Santa Fe
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          11.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe/CA Talleres de Cordoba
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          31.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe/draw
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          19.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe/Union de Santa Fe
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          9.00
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  1x2 &amp; total
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba &amp; under 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.40
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba &amp; over 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.65
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          draw &amp; under 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          4.10
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          draw &amp; over 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          16.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe &amp; under 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          8.50
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe &amp; over 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          9.00
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  1x2 &amp; both teams to score
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba &amp; yes
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.80
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba &amp; no
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.50
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          draw &amp; yes
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          4.80
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          draw &amp; no
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          9.50
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe &amp; yes
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          10.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe &amp; no
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          8.00
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  Halftime/fulltime &amp; total
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba/CA Talleres de Cordoba &amp; under
                          2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          7.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba/draw &amp; under 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          29.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          draw/CA Talleres de Cordoba &amp; under 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          8.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          draw/draw &amp; under 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          6.40
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          draw/Union de Santa Fe &amp; under 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          19.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe/draw &amp; under 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          31.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe/Union de Santa Fe &amp; under 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          21.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba/CA Talleres de Cordoba &amp; over 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          4.33
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba/draw &amp; over 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          51.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba/Union de Santa Fe &amp; over 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          67.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          draw/CA Talleres de Cordoba &amp; over 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          11.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          draw/draw &amp; over 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          51.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          draw/Union de Santa Fe &amp; over 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          34.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe/CA Talleres de Cordoba &amp; over 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          31.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe/draw &amp; over 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          51.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe/Union de Santa Fe &amp; over 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          19.00
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  1st half - 1x2
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.25
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          draw
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.15
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          5.20
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  1st half - handicap
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba (0)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.34
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe (0)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.00
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba (-0.5)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.25
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe (+0.5)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.57
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba (-1)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          4.60
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe (+1)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.17
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  1st half - handicap 0:1
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba (0:1)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          6.60
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          draw (0:1)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.15
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe (0:1)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.56
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  1st half - total
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 0.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.42
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 0.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.65
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 1
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.95
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 1
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.76
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 1.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.90
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 1.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.35
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  1st half - CA Talleres de Cordoba total
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 0.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.80
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 0.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.92
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 1.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          4.75
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 1.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.15
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          11.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.01
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  1st half - Union de Santa Fe total
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 0.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.88
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 0.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.36
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 1.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          9.50
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 1.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.02
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  1st half - both teams to score
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          yes
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          5.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          no
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.14
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  1st half - CA Talleres de Cordoba clean sheet
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          yes
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.36
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          no
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.88
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  1st half - Union de Santa Fe clean sheet
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          yes
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.92
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          no
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.80
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  1st half - odd/even
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          odd
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.05
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          even
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.67
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  1st half - correct score
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          0:0
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.55
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          1:1
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          9.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          2:2
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          101.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          1:0
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.50
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          2:0
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          9.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          2:1
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          23.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          0:1
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          6.80
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          0:2
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          34.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          1:2
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          51.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          other
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          17.00
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  2nd half - 1x2
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          draw
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.55
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          4.75
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  2nd half - handicap
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba (0)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.33
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe (0)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.05
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba (-0.5)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe (+0.5)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.73
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba (-1)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.50
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe (+1)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.26
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  2nd half - handicap 1:0
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba (1:0)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.17
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          draw (1:0)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          5.20
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe (1:0)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          19.00
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba (0:1)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          5.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          draw (0:1)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.15
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe (0:1)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.73
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba (0:2)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          15.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          draw (0:2)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          5.80
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe (0:2)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.15
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba (0:3)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          34.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          draw (0:3)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          10.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe (0:3)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.02
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  2nd half - total
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 1
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.48
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 1
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.50
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 1.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.20
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 1.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.60
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 2
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.75
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 2
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.22
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  2nd half - CA Talleres de Cordoba total
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 0.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.54
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 0.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.30
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 1.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.50
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 1.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.26
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          8.50
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.04
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  2nd half - Union de Santa Fe total
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 0.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.38
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 0.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.52
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 1.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          7.50
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 1.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.06
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          12.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 2.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.00
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  2nd half - both teams to score
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          yes
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.70
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          no
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.24
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  2nd half - CA Talleres de Cordoba clean sheet
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          yes
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.52
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          no
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.38
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  2nd half - Union de Santa Fe clean sheet
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          yes
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.30
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          no
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.54
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  2nd half - odd/even
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          odd
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.95
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          even
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.76
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  2nd half - 1st goal
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.82
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          none
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.70
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.40
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  2nd half - correct score
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          0:0
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.60
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          0:1
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          7.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          0:2
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          29.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          1:0
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.70
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          1:1
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          7.50
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          1:2
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          31.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          2:0
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          7.50
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          2:1
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          16.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          2:2
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          67.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-other row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          other
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          10.00
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  Corner 1x2
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.50
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          draw
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          8.50
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.10
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  Corner handicap
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba (-0.5)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.52
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe (+0.5)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.38
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba (-1.5)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.83
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe (+1.5)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.88
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba (-2.5)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.30
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe (+2.5)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.54
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  Total corners
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 8.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.56
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 8.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.30
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 9.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.88
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 9.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.82
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 10.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.38
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 10.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.53
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  1st corner
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.57
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          none
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          101.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.10
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  Last corner
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.57
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          none
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          101.00
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-3 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.10
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  Odd/even corners
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          odd
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.84
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          even
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.86
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  1st half - corner handicap
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba (+0.5)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.34
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe (-0.5)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          3.00
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba (-0.5)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.73
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe (+0.5)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.98
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          CA Talleres de Cordoba (-1.5)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.50
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          Union de Santa Fe (+1.5)
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.48
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ad470db="" data-v-4fd76316="" className="column">
              <div data-v-6ad470db="" className="market column">
                <div
                  data-v-6ad470db=""
                  className="market-title row"
                  style={{ flexDirection: "row" }}
                >
                  1st half - total corners
                </div>
                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 3.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.44
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 3.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.55
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 4.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.92
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 4.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.78
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-6ad470db="" className="market column">

                <div
                  data-v-6ad470db=""
                  className="outcomes row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          over 5.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          2.70
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-6ad470db=""
                    className="odds-2 row"
                    style={{ flexDirection: "row" }}
                  >
                    <div
                      data-v-6bf0219c=""
                      data-v-6ad470db=""
                      className="outcome row"
                      style={{ flexDirection: "row" }}
                    >
                      <button data-v-6bf0219c="" className="button">
                        <span data-v-6bf0219c="" className="name text">
                          under 5.5
                        </span>
                        <div data-v-6bf0219c="" className="spacer" />

                        <span data-v-6bf0219c="" className="odd text">

                          1.40
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default League;
