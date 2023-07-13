import React from "react";
import { CgTimer } from "react-icons/cg";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

function Baseball() {
  return (
    <>
      <div
        data-v-5a4c8ef6=""
        className="match-title row"
        style={{ flexDirection: "row" }}
      >
        <div
          data-v-5a4c8ef6=""
          className="league row"
          style={{ flexDirection: "row" }}
        >
          <div
            data-v-78fee962=""
            data-v-5a4c8ef6=""
            className="tournament-icon row"
            style={{ flexDirection: "row" }}
          >
            <img
              data-v-78fee962=""
              src="https://mt-sportradar.com/assets/images/regions/16.png"
              alt=""
            />
          </div>
          <div
            data-v-5a4c8ef6=""
            className="league-name text-ellipsis row"
            style={{ flexDirection: "row", display: "block" }}
          >
            MLB
          </div>
          <div data-v-5a4c8ef6="" className="spacer" />
          <div
            data-v-5a4c8ef6=""
            className="time row"
            style={{ flexDirection: "row", flexShrink: 0 }}
          >
            <span data-v-5a4c8ef6="" className="text">
              05/31 09:10
            </span>
          </div>
        </div>
      </div>
      <div
        data-v-5a4c8ef6=""
        className="match row active"
        style={{ flexDirection: "row" }}
      >
        <div data-v-5a4c8ef6="" className="match-info column">
          <div data-v-5a4c8ef6="" className="column">
            <div
              data-v-5a4c8ef6=""
              className="row"
              style={{ flexDirection: "row" }}
            >
              <div data-v-5a4c8ef6="" className="team column">
                <div
                  data-v-5a4c8ef6=""
                  className="row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-cc68f3fe=""
                    data-v-5a4c8ef6=""
                    className="team-icon row"
                    style={{ flexDirection: "row" }}
                  >
                    <img
                      data-v-cc68f3fe=""
                      src="https://img.mt-sportradar.com/ls/crest/big/3644.png"
                      className=""
                      alt=""
                      style={{ height: 14 }}
                    />
                  </div>
                  <span data-v-5a4c8ef6="" className="text">
                    Chicago White Sox
                  </span>
                </div>
                <div
                  data-v-5a4c8ef6=""
                  className="row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    data-v-cc68f3fe=""
                    data-v-5a4c8ef6=""
                    className="team-icon row"
                    style={{ flexDirection: "row" }}
                  >
                    <img
                      data-v-cc68f3fe=""
                      src="https://img.mt-sportradar.com/ls/crest/big/5929.png"
                      className=""
                      alt=""
                      style={{ height: 14 }}
                    />
                  </div>
                  <span data-v-5a4c8ef6="" className="text">
                    Los Angeles Angels
                  </span>
                </div>
              </div>
              <div data-v-5a4c8ef6="" className="score column">
                <div
                  data-v-5a4c8ef6=""
                  className="home-score row"
                  style={{ flexDirection: "row" }}
                >
                  <span
                    data-v-5a4c8ef6=""
                    className="text"
                    style={{ color: "rgb(101, 191, 255)" }}
                  >
                    7
                  </span>
                </div>
                <div
                  data-v-5a4c8ef6=""
                  className="away-score row"
                  style={{ flexDirection: "row" }}
                >
                  <span
                    data-v-5a4c8ef6=""
                    className="text"
                    style={{ color: "rgb(101, 191, 255)" }}
                  >
                    3
                  </span>
                </div>
              </div>
            </div>
            <div
              data-v-5a4c8ef6=""
              className="row"
              style={{ flexDirection: "row" }}
            >
              <div
                data-v-5a4c8ef6=""
                className="progress row"
                style={{ flexDirection: "row" }}
              >
                <span
                  data-v-5a4c8ef6=""
                  className="margin-right-5 text"
                  style={{ opacity: "0.5" }}
                >
                  <CgTimer
                    size="1rem"
                    data-v-e56d064c=""
                    data-v-5a4c8ef6=""
                    className="margin-right-5 fa-solid fa-timer"
                  />
                  9th inning
                </span>
              </div>
              <div
                data-v-5a4c8ef6=""
                className="info row"
                style={{ flexDirection: "row" }}
              >
                <span data-v-5a4c8ef6="" className="detail text">
                  +2
                  <HiOutlineChevronDoubleRight
                    data-v-e56d064c=""
                    data-v-5a4c8ef6=""
                    className="margin-left-3 fa-light fa-angles-right"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          data-v-5a4c8ef6=""
          className="odds row"
          style={{ flexDirection: "row" }}
        >
          <div
            data-v-5a4c8ef6=""
            className="odds-1x2 row"
            style={{ flexDirection: "row" }}
          >
            <div
              data-v-6bf0219c=""
              data-v-5a4c8ef6=""
              className="outcome row"
              style={{ flexDirection: "row" }}
            >
              <button data-v-6bf0219c="" className="button" disabled="disabled">
                <span
                  data-v-6bf0219c=""
                  className="text"
                  style={{ opacity: "0.4", fontSize: "0.675rem" }}
                >
                  Home
                </span>
                <span data-v-6bf0219c="" className="odd text">
                  0.00
                </span>
              </button>
            </div>
            <div
              data-v-6bf0219c=""
              data-v-5a4c8ef6=""
              className="outcome row"
              style={{ flexDirection: "row" }}
            >
              <button data-v-6bf0219c="" className="button">
                <span
                  data-v-6bf0219c=""
                  className="text"
                  style={{ opacity: "0.4", fontSize: "0.675rem" }}
                >
                  Away
                </span>
                <span data-v-6bf0219c="" className="odd text">
                  12.50
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Baseball;
