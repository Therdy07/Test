import React, { useState } from "react";
import { GrBookmark } from "react-icons/gr";
import { BsSortDownAlt, BsSortUpAlt } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Basketball from "./Basketball";
import Baseball from "./Baseball";
import Stats from "./Stats";
import Tennis from "./Tennis";
import TableTennis from "./TableTennis";
import BeachVolley from "./BeachVolley";

function League() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div data-v-5a4c8ef6="" className="inplay scrollable-auto column">
        <div
          data-v-296bd5a2=""
          data-v-5a4c8ef6=""
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
                    src="https://assets.dashboard-yes.bet/img/2.dba1d03.svg"
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
                    Basketball
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
                    src="https://assets.dashboard-yes.bet/img/3.2b24d6d.svg"
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
                    Baseball
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
                    src="https://assets.dashboard-yes.bet/img/5.7ac0dec.svg"
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
                    Tennis
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
                    src="https://assets.dashboard-yes.bet/img/20.b28de01.svg"
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
                    Table Tennis
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
                    src="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2NCA2NCIgdmlld0JveD0iMCAwIDY0IDY0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Y2xpcFBhdGggaWQ9ImEiPjxlbGxpcHNlIGN4PSIzMiIgY3k9IjMyIiByeD0iMjkuNyIgcnk9IjIxLjciLz48L2NsaXBQYXRoPjxjaXJjbGUgY3g9IjMyIiBjeT0iMzIiIGZpbGw9IiNlZGM3MzgiIHI9IjMxIi8+PGVsbGlwc2UgY3g9IjMyIiBjeT0iMzIiIGZpbGw9IiMyNTNlOGUiIHJ4PSIzMSIgcnk9IjI3LjgiLz48ZWxsaXBzZSBjeD0iMzIiIGN5PSIzMiIgZmlsbD0iI2ZmZiIgcng9IjI5LjciIHJ5PSIyMS43Ii8+PGVsbGlwc2UgY2xpcC1wYXRoPSJ1cmwoI2EpIiBjeD0iMzIiIGN5PSIzMi42IiBmaWxsPSIjZWRjNzM4IiByeD0iMzEiIHJ5PSIxNC41Ii8+PHBhdGggZD0ibTQzLjMgMy4xYzEuNCAzLjUgMi4xIDcuMyAyLjEgMTEuMyAwIDE3LjEtMTMuOSAzMS0zMSAzMS00IDAtNy44LS43LTExLjMtMi4xIDQuNSAxMS41IDE1LjggMTkuNyAyOC45IDE5LjcgMTcuMSAwIDMxLTEzLjkgMzEtMzEgMC0xMy4xLTguMi0yNC40LTE5LjctMjguOXoiIG9wYWNpdHk9Ii4wNSIvPjxwYXRoIGQ9Im00OS4xIDYuMWMzLjIgNC45IDUuMSAxMC44IDUuMSAxNy4xIDAgMTcuMS0xMy45IDMxLTMxIDMxLTYuMyAwLTEyLjItMS45LTE3LjEtNS4xIDUuNiA4LjQgMTUuMSAxMy45IDI1LjkgMTMuOSAxNy4xIDAgMzEtMTMuOSAzMS0zMSAwLTEwLjgtNS41LTIwLjMtMTMuOS0yNS45eiIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+"
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
                    Beach Volley
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
          data-v-5a4c8ef6=""
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
                ata-v-e56d064c=""
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
        <div data-v-5a4c8ef6="" className="inplay-list column">
          {toggleState === 1 && <Basketball />}
          {toggleState === 2 && <Baseball />}
          {toggleState === 3 && <Tennis />}
          {toggleState === 4 && <TableTennis />}
          {toggleState === 5 && <BeachVolley />}
        </div>
        <div
          data-v-72e289f4=""
          data-v-5a4c8ef6=""
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
