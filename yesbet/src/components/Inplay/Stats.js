import React from "react";
import { CgTimer } from "react-icons/cg";

function Stats() {
  return (
    <div
      data-v-4fd76316=""
      data-v-5a4c8ef6=""
      className="markets scrollable-auto column inplay-markets"
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
            <img
              data-v-4fd76316=""
              src="https://assets.dashboard-yes.bet/img/2.dba1d03.svg"
              className="sports-icon margin-right-5"
              alt=""
            />
            Basketball
          </span>
          <span data-v-4fd76316="" className="dia text" />
          <span data-v-4fd76316="" className="league text">
            <div
              data-v-78fee962=""
              data-v-4fd76316=""
              className="tournament-icon row"
              style={{ flexDirection: "row" }}
            >
              <img
                data-v-78fee962=""
                src="https://mt-sportradar.com/assets/images/regions/15.png"
                alt=""
              />
            </div>
            WNBA
          </span>
        </div>
      </div>
      <div
        data-v-4fd76316=""
        className="match-detail row"
        style={{ flexDirection: "row" }}
      >
        <span data-v-4fd76316="" className="time margin-right-10 text">
          <CgTimer
            size="1rem"
            data-v-e56d064c=""
            data-v-4fd76316=""
            className="margin-right-5 fa-regular fa-timer"
          />
          05/31 10:00
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
              data-v-cc68f3fe=""
              src="https://img.mt-sportradar.com/ls/crest/big/3448.png"
              className=""
              alt=""
              style={{ height: 16 }}
            />
          </div>
          <span data-v-4fd76316="" className="text">
            Seattle Storm
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
              data-v-cc68f3fe=""
              src="https://img.mt-sportradar.com/ls/crest/big/3446.png"
              className=""
              alt=""
              style={{ height: 16 }}
            />
          </div>
          <span data-v-4fd76316="" className="text">
            New York Liberty
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
          style={{ height: "453.435px", flexDirection: "row" }}
        >
          <iframe
            title="live"
            data-v-183c8283=""
            src="https://mt-sportradar.com/matchtracker/?matchId=38348125&lang=en&theme=yesbet"
            scrolling="no"
            style={{
              transform: "scale(1.25954)",
              transformOrigin: "0px 0px 0px",
              width: 655,
              height: 360,
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
                Quarter
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
          className="no-market row"
          style={{ flexDirection: "row" }}
        >
          <span data-v-4fd76316="" className="text">
            데이터가 없습니다
          </span>
        </div>
      </div>
    </div>
  );
}

export default Stats;
