import React, { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { GrBookmark } from "react-icons/gr";
import { BsSortDownAlt, BsSortUpAlt } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import Stats from "./Stats";
import CallofDuty from "./CallofDuty";
import Lol from "./Lol";
import CounterStrike from "./CounterStrike";
import Dota2 from "./Dota2";
import Warcraft3 from "./Warcraft3";
import KingofGlory from "./KingofGlory";
import Nba2k from "./Nba2k";
import Valorant from "./Valorant";
import MobileLegends from "./MobileLegends";
import { CgTimer } from "react-icons/cg";

function League() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div data-v-ee8420c2="" className="prematch scrollable-auto column">
        <div
          data-v-296bd5a2=""
          data-v-ee8420c2=""
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
                    data-v-296bd5a2=""
                    src="https://assets.dashboard-yes.bet/img/20000000003266.397ac10.svg"
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
                    Call of Duty
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
                    data-v-296bd5a2=""
                    src="https://assets.dashboard-yes.bet/img/20000000003280.aa1082b.svg"
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
                    League of Legends
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
                    data-v-296bd5a2=""
                    src="https://assets.dashboard-yes.bet/img/20000000003286.db0eb8d.svg"
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
                    Counter-Strike
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
                    data-v-296bd5a2=""
                    src="https://assets.dashboard-yes.bet/img/20000000003296.f6055c6.svg"
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
                    Dota 2
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
                    data-v-296bd5a2=""
                    src="https://assets.dashboard-yes.bet/img/20000000003315.73240c9.svg"
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
                    Warcraft 3
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
                    data-v-296bd5a2=""
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOCA1MCIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIGNsYXNzPSJpY29uIGdhbWUtaWNvbiBpY29uLWtpbmctb2YtZ2xvcnktdGludCI+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy43MzMgNy4wNTF2Ni44NzNjLTYuMDI3IDAtMTAuOTEyIDQuOTg3LTEwLjkxMiAxMS4xMzggMCA2LjE1MiA0Ljg4NSAxMS4xMzggMTAuOTEyIDExLjEzOFY1MGgtLjEyOWMtLjIxOC0xLjUwNy0uNzU4LTMuMTg0LTEuNjE4LTUuMDMyYTUuNzk4IDUuNzk4IDAgMDAtMS45MDUtMi4yOCAxNy41OTcgMTcuNTk3IDAgMDEtOC44MjYtNC44MjloMi4yNDhsLTEuNjYtMS43MjktLjMyLS4zMzQtMS40MTQtMS40NzQtLjI0NC0uMjU1djIuMjJBMTguMTEgMTguMTEgMCAwMTAgMjUuMDYyYzAtOS44MzUgNy43NjItMTcuODMgMTcuNDA0LTE4LjAwOGwuMzMtLjAwM3pNMjAuMzk2IDBjLjIxOCAxLjUwNy43NTggMy4xODQgMS42MTggNS4wMzJhNS43OTggNS43OTggMCAwMDEuOTA0IDIuMjggMTcuNiAxNy42IDAgMDE4LjgyNyA0LjgyOUgzMC4yN2wxLjY1OSAxLjcyOS4zMi4zMzQgMS40MTUgMS40NzQuMjQ0LjI1NVYxMy40M0ExOC4xMDggMTguMTA4IDAgMDEzOCAyNC45MzhjMCA5LjgzNS03Ljc2MiAxNy44My0xNy40MDQgMTguMDA4bC0uMzI5LjAwM3YtNy4wNTZhLjYwMi42MDIgMCAwMC4wMzQuMTQ5YzYuMDA4IDAgMTAuODc5LTQuOTcyIDEwLjg3OS0xMS4xMDQgMC02LjEzMi00Ljg3MS0xMS4xMzgtMTAuODgtMTEuMTM4bC0uMDMzLjEyNVYwaC4xMjl6TTE5IDE4LjMxbDYuNTU0IDYuNTQ3TDE5IDMxLjQwNGwtNi41NTQtNi41NDdMMTkgMTguMzA5eiIgZmlsbD0iI2ZmOGYyNyI+PC9wYXRoPjwvc3ZnPg=="
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
                    King of Glory
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
                    data-v-296bd5a2=""
                    src="https://assets.dashboard-yes.bet/img/20000000003326.0ed7a1c.svg"
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
                    NBA2K
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
                    data-v-296bd5a2=""
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgNTEgNDYiIGNsYXNzPSJpY29uIGdhbWUtaWNvbiBpY29uLXZhbG9yYW50LXRpbnQiPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0iTS45NzIuNTg5bDM0LjcxMiA0NUgxOS4xMDJMLjk3MiAyMi4wODRWLjU5em01MCAuNzA3djIxLjQ5NmwtNS45NCA3LjdIMjguNDUxTDUwLjk3MiAxLjI5N3oiIGZpbGw9IiNmZjQ2NTUiPjwvcGF0aD48L3N2Zz4="
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
                    Valorant
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
                    data-v-296bd5a2=""
                    src="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNzkuMSAxODYuNiIgdmlld0JveD0iMCAwIDE3OS4xIDE4Ni42IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48bGluZWFyR3JhZGllbnQgaWQ9ImEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAxODgpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjM3Ljg4MDEiIHgyPSIxNDEuOTQxNiIgeTE9IjE5Mi42NTk3IiB5Mj0iLTExLjU3MjUiPjxzdG9wIG9mZnNldD0iLjI1MiIgc3RvcC1jb2xvcj0iI2Q1YWI2YSIvPjxzdG9wIG9mZnNldD0iLjUiIHN0b3AtY29sb3I9IiNmOWQ1OGUiLz48c3RvcCBvZmZzZXQ9Ii43NzQ2IiBzdG9wLWNvbG9yPSIjOTE2ODMyIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzY0ZDIzIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0yMC4yIDcuMWg2NS40IDkuOWMxNi43IDAgMjAuNyA0IDI3LjggMTFsNDMuNiA0My4yYzcuNSA3LjQgMTIuMiAxMi4xIDEyLjIgMjkuM3Y5LjkgNjQuMmwtMjkuMi0yOXYtNjguM2wtMjUuOS0yNS42LTM0LjUgMzQuMnptMTQyLjUgMTc5LjEtMzkuNi0zOS4zdi02Ni43bC0zMy42IDMzLjQtMzMuNi0zMy40djcyLjJsLTI2LjctMjYuNXYtNzIuMmwtMjkuMi0yOXY2OC4xIDkuOWMwIDE3LjIgNC43IDIxLjggMTIuMiAyOS4zbDQzLjYgNDMuMmM3LjEgNyAxMS4xIDExIDI3LjggMTFoOS45em0tMTIxLjUgMC00MS4yLTQwLjl2NDAuOXptOTYuNi0xNzkuMSA0MS4yIDQwLjl2LTQwLjl6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
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
                    Mobile Legends
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
          data-v-ee8420c2=""
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
            <div
              data-v-0e50b22a=""
              className="select-esports-type row"
              style={{ flexDirection: "row" }}
            >
              <a
                data-v-0e50b22a=""
                href="/esports/prematch"
                aria-current="page"
                className="router-link-exact-active router-link-active button text"
                style={{ background: "transparent" }}
              >
                <span
                  data-v-0e50b22a=""
                  className="text"
                  style={{ color: "rgb(255, 229, 136)" }}
                >
                  Prematch
                </span>
              </a>
              <a
                data-v-0e50b22a=""
                href="/esports/inplay"
                className="button text"
                style={{ background: "transparent" }}
              >
                <span
                  data-v-0e50b22a=""
                  className="text"
                  style={{ color: "rgb(255, 255, 255)" }}
                >
                  <CgTimer
                    size="1rem"
                    data-v-e56d064c=""
                    data-v-0e50b22a=""
                    className="margin-right-5 fa-solid fa-timer"
                  />
                  Inplay
                </span>
                <div data-v-0e50b22a="" className="blink-container">
                  <div data-v-0e50b22a="" className="blink-pulse" />
                  <div data-v-0e50b22a="" className="blink-dot" />
                </div>
              </a>
            </div>
            <div data-v-0e50b22a="" className="spacer" />
            <div
              data-v-0e50b22a=""
              dir="auto"
              className="v-select vs--single vs--unsearchable"
            >
              <div
                id="vs5__combobox"
                role="combobox"
                aria-controls=""
                aria-expanded="false"
                aria-owns="vs5__listbox"
                aria-label="Search for option"
                className="vs__dropdown-toggle"
              >
                <div className="vs__selected-options">
                  <span className="vs__selected">Winner</span>
                  <input
                    readOnly="readonly"
                    aria-autocomplete="list"
                    aria-labelledby="vs5__combobox"
                    aria-controls="vs5__listbox"
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
                id="vs5__listbox"
                role="listbox"
                style={{ display: "none", visibility: "hidden" }}
              />
            </div>
          </div>
        </div>
        <div data-v-ee8420c2="" className="prematch-list column">
          {toggleState === 1 && <CallofDuty />}
          {toggleState === 2 && <Lol />}
          {toggleState === 3 && <CounterStrike />}
          {toggleState === 4 && <Dota2 />}
          {toggleState === 5 && <Warcraft3 />}
          {toggleState === 6 && <KingofGlory />}
          {toggleState === 7 && <Nba2k />}
          {toggleState === 8 && <Valorant />}
          {toggleState === 9 && <MobileLegends />}
        </div>
        <div
          data-v-72e289f4=""
          data-v-ee8420c2=""
          className="pagination row"
          style={{ flexDirection: "row", alignItems: "center" }}
        >
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
                id="vs6__combobox"
                role="combobox"
                aria-controls=""
                aria-expanded="false"
                aria-owns="vs6__listbox"
                aria-label="Search for option"
                className="vs__dropdown-toggle"
                style={{ height: 40 }}
              >
                <div className="vs__selected-options">
                  <span className="vs__selected">10</span>
                  <input
                    readOnly="readonly"
                    aria-autocomplete="list"
                    aria-labelledby="vs6__combobox"
                    aria-controls="vs6__listbox"
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
                id="vs6__listbox"
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
                id="vs7__combobox"
                role="combobox"
                aria-controls=""
                aria-expanded="false"
                aria-owns="vs7__listbox"
                aria-label="Search for option"
                className="vs__dropdown-toggle"
                style={{ height: 40 }}
              >
                <div className="vs__selected-options">
                  <span className="vs__selected">1</span>
                  <input
                    readOnly="readonly"
                    aria-autocomplete="list"
                    aria-labelledby="vs7__combobox"
                    aria-controls="vs7__listbox"
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
                id="vs7__listbox"
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
              disabled="disabled"
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
    </>
  );
}

export default League;
