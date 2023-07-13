import React from "react";
import { CgTimer } from "react-icons/cg";
import Record from "./fixtureDetails.json"

function Stats() {
  return (

    <>
      {
        Record.data.fixtureDetail && Record.data.fixtureDetail.map((fix, i) =>
          <div
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
                  <img
                    data-v-4fd76316=""
                    src="https://assets.dashboard-yes.bet/img/1.e26e720.svg"
                    className="sports-icon margin-right-5"
                    alt=""
                  />
                  {fix.sportName}
                </span>{" "}
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
                      src="https://mt-sportradar.com/assets/images/regions/4.png"
                      alt=""
                    />
                  </div>

                  {fix.tournament.name}
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

                {fix.startAt}
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
                    src="https://img.mt-sportradar.com/ls/crest/big/4818.png"
                    className=""
                    alt=""
                    style={{ height: 16 }}
                  />
                </div>{" "}
                <span data-v-4fd76316="" className="text">

                  {fix.homeTeam.name}
                </span>
              </div>{" "}
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
                    src="https://img.mt-sportradar.com/ls/crest/big/4699.png"
                    className=""
                    alt=""
                    style={{ height: 16 }}
                  />
                </div>{" "}
                <span data-v-4fd76316="" className="text">
                  {fix.awayTeam.name}
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
                style={{ height: "193.875px", flexDirection: "row" }}
              >
                <iframe
                  title="stats"
                  data-v-183c8283=""
                  src="https://mt-sportradar.com/headtohead/?matchId=36604345&lang=en&theme=yesbet"
                  scrolling="no"
                  style={{
                    transform: "scale(1.03125)",
                    transformOrigin: "0px 0px 0px",
                    width: 800,
                    height: 188,
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
                </span>{" "}
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
                {
                  fix.markets && fix.markets.map((res, i) =>
                    <div data-v-6ad470db="" data-v-4fd76316="" className="column">
                      <div data-v-6ad470db="" className="market column">
                        <div
                          data-v-6ad470db=""
                          className="market-title row"
                          style={{ flexDirection: "row" }}
                        >
                          {res.marketName}
                        </div>

                        <div
                          data-v-6ad470db=""
                          className="outcomes row"
                          style={{ flexDirection: "row" }}
                        >
                          {
                            res.outcomes && res.outcomes.map((req, i) =>
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
                                      {req.outcomeName}
                                    </span>
                                    <div data-v-6bf0219c="" className="spacer" />
                                    <span data-v-6bf0219c="" className="odd text">
                                      {req.odds}
                                    </span>
                                  </button>
                                </div>
                              </div>
                            )
                          }

                        </div>
                      </div>
                    </div>
                  )
                }

              </div>
            </div>
          </div>
        )

      }

    </>
 

  );
}

export default Stats;
