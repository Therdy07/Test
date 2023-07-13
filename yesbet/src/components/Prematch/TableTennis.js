import React from 'react'
import SidebarPages from '../SidebarPages'
import PrematchMenu from './PrematchMenu'
import Records from "./fixture.json"
import Record from "./fixtureDetails.json"

function TableTennis() {
  return (
    <>
      <div id="root">
        <div id="app">
          <div id="__layout">
            <div data-v-5fa80d04="" className="fill-height">
              <div data-v-5fa80d04="" className="fill-height">
                <div data-v-5fa80d04="" className="fill-height">
                  <div data-v-5fa80d04="" className="layout column">
                    {/* navbar */}
                    <div
                      data-v-5fa80d04=""
                      className="contents row"
                      style={{ flexDirection: "row" }}
                    >
                      <div
                        data-v-5fa80d04=""
                        className="content column"
                        style={{ height: 961 }}
                      >
                        <div data-v-5fa80d04="" className="column">
                          <div
                            data-v-47fb79fe=""
                            data-v-5fa80d04=""
                            className="wrap scrollable-auto row"
                            style={{ flexDirection: "row" }}
                          >
                            {/* <---LeftSide---> */}
                            <div
                              data-v-47fb79fe=""
                              className="prematch scrollable-auto column"
                            >
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

                                <PrematchMenu />

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
                                      backgroundColor: "rgb(37, 46, 72)"
                                    }}
                                  />
                                  <button
                                    data-v-0e50b22a=""
                                    className="search-button button"
                                    style={{
                                      background: "rgb(37, 46, 72)",
                                      width: 40,
                                      height: 40
                                    }}
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 512 512"
                                      data-v-e56d064c=""
                                      data-v-0e50b22a=""
                                      className="fa-solid fa-magnifying-glass"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                                    </svg>
                                  </button>
                                </div>
                                <div
                                  data-v-0e50b22a=""
                                  className="settings row"
                                  style={{
                                    height: 40,
                                    flexDirection: "row",
                                    alignItems: "center"
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
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 24 24"
                                            data-v-e56d064c=""
                                            data-v-0e50b22a=""
                                            className="margin-right-5 fa-regular fa-bookmark"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <polygon
                                              fill="none"
                                              stroke="#000"
                                              strokeWidth={2}
                                              points="5 1 5 22 12 17 19 22 19 1"
                                            />
                                          </svg>
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
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 16 16"
                                        data-v-e56d064c=""
                                        data-v-0e50b22a=""
                                        className="margin-right-5 fa-light fa-arrow-down-short-wide"
                                        height="1rem"
                                        width="1rem"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293V3.5zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z" />
                                      </svg>
                                      Sort time
                                    </span>
                                  </button>
                                  <button
                                    data-v-0e50b22a=""
                                    className="sort-league button text"
                                    style={{ background: "transparent" }}
                                  >
                                    <span data-v-0e50b22a="" className="text">
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 16 16"
                                        data-v-e56d064c=""
                                        data-v-0e50b22a=""
                                        className="margin-right-5 fa-light fa-arrow-up-short-wide"
                                        height="1rem"
                                        width="1rem"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M3.5 13.5a.5.5 0 0 1-1 0V4.707L1.354 5.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 4.707V13.5zm4-9.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z" />
                                      </svg>
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
                                      height: "100%"
                                    }}
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="none"
                                      strokeWidth={2}
                                      viewBox="0 0 24 24"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      data-v-e56d064c=""
                                      data-v-0e50b22a=""
                                      className="fa-solid fa-arrows-rotate"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <polyline points="23 4 23 10 17 10" />
                                      <polyline points="1 20 1 14 7 14" />
                                      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                    </svg>
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
                                          readOnly=""
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
                                        <div
                                          className="vs__spinner"
                                          style={{ display: "none" }}
                                        >
                                          Loading...
                                        </div>
                                      </div>
                                    </div>
                                    <ul
                                      id="vs2__listbox"
                                      role="listbox"
                                      style={{
                                        display: "none",
                                        visibility: "hidden"
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div
                                data-v-47fb79fe=""
                                className="prematch-list column modern"
                              >
                                {
                                  Records.data.fixtures.fixtures && Records.data.fixtures.fixtures.map((soccer, i) =>
                                    <div
                                      data-v-47fb79fe=""
                                      className="prematch-list column modern"
                                    >
                                      <div
                                        data-v-47fb79fe=""
                                        className="match-title row"
                                        style={{ flexDirection: "row" }}
                                      >
                                        <div
                                          data-v-47fb79fe=""
                                          className="league row"
                                          style={{ flexDirection: "row" }}
                                        >
                                          <div
                                            data-v-78fee962=""
                                            data-v-47fb79fe=""
                                            className="tournament-icon row"
                                            style={{ flexDirection: "row" }}
                                          >
                                            <img alt=""

                                              data-v-78fee962=""
                                              src="https://mt-sportradar.com/assets/images/regions/52.png"
                                            />
                                          </div>
                                          <div
                                            data-v-47fb79fe=""
                                            className="league-name text-ellipsis row"
                                            style={{
                                              flexDirection: "row",
                                              display: "block"
                                            }}
                                          >
                                            {soccer.tournament.name}
                                          </div>
                                        </div>
                                        <div
                                          data-v-47fb79fe=""
                                          className="desc-title row"
                                          style={{ flexDirection: "row" }}
                                        >
                                          <div
                                            data-v-47fb79fe=""
                                            className="title-1x2 row"
                                            style={{ flexDirection: "row" }}
                                          >
                                            <span
                                              data-v-47fb79fe=""
                                              className="text-level-11 text"
                                            >
                                              Home Team
                                            </span>
                                            <span
                                              data-v-47fb79fe=""
                                              className="text-level-11 text"
                                            >
                                              Draw
                                            </span>
                                            <span
                                              data-v-47fb79fe=""
                                              className="text-level-11 text"
                                            >
                                              Away Team
                                            </span>
                                          </div>
                                        </div>
                                      </div>

                                      <div
                                        data-v-47fb79fe=""
                                        className="match row"
                                        style={{ flexDirection: "row" }}
                                      >
                                        <div
                                          data-v-47fb79fe=""
                                          className="match-info row"
                                          style={{ flexDirection: "row" }}
                                        >
                                          <div data-v-47fb79fe="" className="date column">
                                            <div
                                              data-v-47fb79fe=""
                                              className="day row"
                                              style={{ flexDirection: "row" }}
                                            >
                                              {soccer.startAt}
                                            </div>
                                          </div>
                                          <div data-v-47fb79fe="" className="team column">
                                            <div
                                              data-v-47fb79fe=""
                                              className="row"
                                              style={{ flexDirection: "row" }}
                                            >
                                              <div
                                                data-v-cc68f3fe=""
                                                data-v-47fb79fe=""
                                                className="team-icon row"
                                                style={{ flexDirection: "row" }}
                                              >
                                                <img alt=""

                                                  data-v-cc68f3fe=""
                                                  src="https://img.mt-sportradar.com/ls/crest/big/21903.png"
                                                  className=""
                                                  style={{ height: 14 }}
                                                />
                                              </div>
                                              <span data-v-47fb79fe="" className="text">
                                                {soccer.homeTeam.name}
                                              </span>
                                            </div>
                                            <div
                                              data-v-47fb79fe=""
                                              className="row"
                                              style={{ flexDirection: "row" }}
                                            >
                                              <div
                                                data-v-cc68f3fe=""
                                                data-v-47fb79fe=""
                                                className="team-icon row"
                                                style={{ flexDirection: "row" }}
                                              >
                                                <img alt=""

                                                  data-v-cc68f3fe=""
                                                  src="https://img.mt-sportradar.com/ls/crest/big/21906.png"
                                                  className=""
                                                  style={{ height: 14 }}
                                                />
                                              </div>
                                              <span data-v-47fb79fe="" className="text">
                                                {soccer.awayTeam.name}
                                              </span>
                                            </div>
                                          </div>
                                        </div>

                                        <div
                                          data-v-47fb79fe=""
                                          className="odds row"
                                          style={{ flexDirection: "row" }}
                                        >
                                          {
                                            soccer.mainMarkets.winner.outcomes && soccer.mainMarkets.winner.outcomes.map((out, i) =>
                                              <div
                                                data-v-47fb79fe=""
                                                className="odds-1x2 row"
                                                style={{ flexDirection: "row" }}
                                              >
                                                <div
                                                  data-v-6bf0219c=""
                                                  data-v-47fb79fe=""
                                                  className="outcome row"
                                                  style={{ flexDirection: "row" }}
                                                >
                                                  <button
                                                    data-v-6bf0219c=""
                                                    className="button"
                                                  >
                                                    <span
                                                      data-v-6bf0219c=""
                                                      className="odd text"
                                                    >
                                                      {out.odds}
                                                    </span>
                                                  </button>
                                                </div>
                                              </div>
                                            )
                                          }

                                          <div
                                            data-v-47fb79fe=""
                                            className="detail-wrap row"
                                            style={{ flexDirection: "row" }}
                                          >
                                            <div
                                              data-v-47fb79fe=""
                                              className="detail row"
                                              style={{ flexDirection: "row" }}
                                            >
                                              <button
                                                data-v-47fb79fe=""
                                                className="button text active"
                                                style={{ background: "transparent" }}
                                              >
                                                <span data-v-47fb79fe="" className="text">
                                                  +{soccer.marketCount}
                                                </span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>

                                      </div>

                                    </div>
                                  )

                                }
                              </div>

                              <div
                                data-v-72e289f4=""
                                data-v-47fb79fe=""
                                className="pagination row"
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
                                          readOnly=""
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
                                        <div
                                          className="vs__spinner"
                                          style={{ display: "none" }}
                                        >
                                          Loading...
                                        </div>
                                      </div>
                                    </div>
                                    <ul
                                      id="vs3__listbox"
                                      role="listbox"
                                      style={{
                                        display: "none",
                                        visibility: "hidden"
                                      }}
                                    />
                                  </div>
                                </div>
                                <div
                                  data-v-72e289f4=""
                                  className="row"
                                  style={{
                                    flexDirection: "row",
                                    alignItems: "center"
                                  }}
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
                                          readOnly=""
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
                                        <div
                                          className="vs__spinner"
                                          style={{ display: "none" }}
                                        >
                                          Loading...
                                        </div>
                                      </div>
                                    </div>
                                    <ul
                                      id="vs4__listbox"
                                      role="listbox"
                                      style={{
                                        display: "none",
                                        visibility: "hidden"
                                      }}
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
                                    disabled=""
                                    style={{ background: "rgb(37, 46, 72)" }}
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 24 24"
                                      data-v-e56d064c=""
                                      data-v-72e289f4=""
                                      className="fa-solid fa-chevron-left"
                                      height="1.1rem"
                                      width="1.1rem"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g>
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
                                      </g>
                                    </svg>
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
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 24 24"
                                      data-v-e56d064c=""
                                      data-v-72e289f4=""
                                      className="fa-solid fa-chevron-right"
                                      height="1.1rem"
                                      width="1.1rem"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g>
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                                      </g>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                            {/* <--- ENDLeftSide---> */}
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
                                        <img alt=""
                                          data-v-4fd76316=""
                                          src="https://assets.dashboard-yes.bet/img/1.e26e720.svg"
                                          className="sports-icon margin-right-5"
                                        />
                                        TableTennis
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
                                      <i
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
                                        <img alt=""
                                          data-v-cc68f3fe=""
                                          src="https://img.mt-sportradar.com/ls/crest/big/3210.png"
                                          className=""
                                          style={{ height: 16 }}
                                        />
                                      </div>
                                      <span data-v-4fd76316="" className="text">
                                        {fix.homeTeam.name}
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
                                  {
                                    fix.markets && fix.markets.map((mar) =>
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
                                                {mar.marketName}

                                              </div>
                                              <div
                                                data-v-6ad470db=""
                                                className="outcomes row"
                                                style={{ flexDirection: "row" }}
                                              >
                                                {

                                                  mar.outcomes && mar.outcomes.map((out) => 
                                                  
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
                                                        {out.outcomeName}
                                                      </span>
                                                      <div data-v-6bf0219c="" className="spacer" />

                                                      <span data-v-6bf0219c="" className="odd text">

                                                        {out.odds}
                                                      </span>
                                                    </button>
                                                  </div>
                                                </div>
                                                  )
                                                }

                                              </div>
                                            </div>
                                          </div>

                                        </div>
                                      </div>
                                    )
                                  }
                                </div>
                              )
                            }

                          </div>
                        </div>
                      </div>
                      <SidebarPages />
                    </div>

                    <div
                      data-v-f226d6e6=""
                      data-v-5fa80d04=""
                      className="row"
                      style={{ flexDirection: "row" }}
                    >
                      <div
                        className="row"
                        style={{ width: "100%", flexDirection: "row" }}
                      />
                    </div>
                    <div data-v-5fa80d04="" className="slideout-panel clearfix">
                      <div className="slideout-wrapper" />
                    </div>
                    <div data-v-5fa80d04="" className="vue-portal-target" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TableTennis