import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react'
import { FaSearch } from "react-icons/fa";

function LiveGame() {

  useEffect(() => {
    getRecords();
  }, [])

  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(false)

  const getRecords = async () => {
    try {
      const res = await axios.get("https://api.dashboard-yes.bet/sports/featured")
      setRecords(res.data.data.live)
      setLoading(true)
      console.log(res);
    } catch (err) {
      alert(err.message);
    }

  }

  return (
    // <div data-v-2b4c8efc="" className="match column">
    //   <div
    //     data-v-2b4c8efc=""
    //     className="header row"
    //     style={{ flexDirection: "row" }}
    //   >
    //     <div
    //       data-v-2b4c8efc=""
    //       className="row"
    //       style={{ flexDirection: "row" }}
    //     >
    //       <span data-v-2b4c8efc="" className="text">
    //         Live
    //       </span>
    //     </div>
    //   </div>
    //   <div
    //     data-v-2b4c8efc=""
    //     className="team row"
    //     style={{ flexDirection: "row" }}
    //   >
    //     <div
    //       data-v-cc68f3fe=""
    //       data-v-2b4c8efc=""
    //       className="team-icon row"
    //       style={{ flexDirection: "row" }}
    //     >
    //       <img
    //         alt=""
    //         data-v-cc68f3fe=""
    //         src="https://img.mt-sportradar.com/ls/crest/big/7424.png"
    //         className=""
    //         style={{
    //           width: "80px",
    //           height: "80px",
    //         }}
    //       />
    //     </div>
    //     <span data-v-2b4c8efc="" className="margin-horizontal-10 text">
    //       vs
    //     </span>
    //     <div
    //       data-v-cc68f3fe=""
    //       data-v-2b4c8efc=""
    //       className="team-icon row"
    //       style={{ flexDirection: "row" }}
    //     >
    //       <img
    //         alt=""
    //         data-v-cc68f3fe=""
    //         src="https://img.mt-sportradar.com/ls/crest/big/22028.png"
    //         className=""
    //         style={{
    //           width: "80px",
    //           height: "80px",
    //         }}
    //       />
    //     </div>
    //   </div>
    //   <div
    //     data-v-2b4c8efc=""
    //     className="progress row"
    //     style={{ flexDirection: "row" }}
    //   >
    //     <span data-v-2b4c8efc="" className="text">
    //       2nd half
    //     </span>
    //   </div>
    //   <div
    //     data-v-2b4c8efc=""
    //     className="league row"
    //     style={{ flexDirection: "row" }}
    //   >
    //     <span data-v-2b4c8efc="" className="text">
    //       Soccer
    //     </span>
    //     <span data-v-2b4c8efc="" className="margin-horizontal-5 text">
    //       /
    //     </span>
    //     <span
    //       data-v-2b4c8efc=""
    //       className="text-ellipsis text"
    //       style={{ display: "block" }}
    //     >
    //       Int. Friendly Games W
    //     </span>
    //   </div>
    //   <div data-v-2b4c8efc="" className="score column">
    //     <div
    //       data-v-2b4c8efc=""
    //       className="margin-bottom-5 row"
    //       style={{ flexDirection: "row" }}
    //     >
    //       <span
    //         data-v-2b4c8efc=""
    //         className="text-level-6 text-ellipsis text"
    //         style={{ display: "block" }}
    //       >
    //         USA
    //       </span>
    //       <div data-v-2b4c8efc="" className="spacer"></div>
    //       <span data-v-2b4c8efc="" className="text-level-6 text">
    //         1
    //       </span>
    //     </div>
    //     <div
    //       data-v-2b4c8efc=""
    //       className="row"
    //       style={{ flexDirection: "row" }}
    //     >
    //       <span
    //         data-v-2b4c8efc=""
    //         className="text-level-6 text-ellipsis text"
    //         style={{ display: "block" }}
    //       >
    //         Ireland
    //       </span>
    //       <div data-v-2b4c8efc="" className="spacer"></div>
    //       <span data-v-2b4c8efc="" className="text-level-6 text">
    //         0
    //       </span>
    //     </div>
    //   </div>
    //   <div
    //     data-v-2b4c8efc=""
    //     className="detail row"
    //     style={{ flexDirection: "row" }}
    //   >
    //     <button
    //       data-v-2b4c8efc=""
    //       className="button"
    //       style={{ width: "100%", height: "40px" }}
    //     >
    //       <span data-v-2b4c8efc="" className="text">
    //         <FaSearch
    //           data-v-e56d064c=""
    //           data-v-2b4c8efc=""
    //           className="fa-solid fa-magnifying-glass"
    //         />
    //         View betting details
    //       </span>
    //     </button>
    //   </div>
    // </div>
    <>
      {
        loading && records.map((record) =>
          <div data-v-2b4c8efc="" className="match column" key={record.matchId}>
            <div
              data-v-2b4c8efc=""
              className="header row"
              style={{ flexDirection: "row" }}
            >
              <div
                data-v-2b4c8efc=""
                className="row"
                style={{ flexDirection: "row" }}
              >
                <span data-v-2b4c8efc="" className="text">
                  Live
                </span>
              </div>
            </div>
            <div
              data-v-2b4c8efc=""
              className="team row"
              style={{ flexDirection: "row" }}
            >
              <div
                data-v-cc68f3fe=""
                data-v-2b4c8efc=""
                className="team-icon row"
                style={{ flexDirection: "row" }}
              >
                <img
                  alt=""
                  data-v-cc68f3fe=""
                  src="https://img.mt-sportradar.com/ls/crest/big/6411.png"
                  className=""
                  style={{ width: 80, height: 80 }}
                />
              </div>
              <span data-v-2b4c8efc="" className="margin-horizontal-10 text">
                vs
              </span>
              <div
                data-v-cc68f3fe=""
                data-v-2b4c8efc=""
                className="team-icon row"
                style={{ flexDirection: "row" }}
              >
                <img
                  alt=""
                  data-v-cc68f3fe=""
                  src="https://img.mt-sportradar.com/ls/crest/big/124488.png"
                  className=""
                  style={{ width: 80, height: 80 }}
                />
              </div>
            </div>
            <div
              data-v-2b4c8efc=""
              className="progress row"
              style={{ flexDirection: "row" }}
            >
              <span data-v-2b4c8efc="" className="text">
                {record.matchStatus}
              </span>
            </div>
            <div
              data-v-2b4c8efc=""
              className="league row"
              style={{ flexDirection: "row" }}
            >
              <span data-v-2b4c8efc="" className="text">
                {record.sportName}
              </span>
              <span data-v-2b4c8efc="" className="margin-horizontal-5 text">
                /
              </span>
              <span
                data-v-2b4c8efc=""
                className="text-ellipsis text"
                style={{ display: "block" }}
              >
                {record.tournament.name}
              </span>
            </div>
            <div data-v-2b4c8efc="" className="score column">
              <div
                data-v-2b4c8efc=""
                className="margin-bottom-5 row"
                style={{ flexDirection: "row" }}
              >
                <span
                  data-v-2b4c8efc=""
                  className="text-level-6 text-ellipsis text"
                  style={{ display: "block" }}
                >
                  {record.homeTeam}
                </span>
                <div data-v-2b4c8efc="" className="spacer" />
                <span data-v-2b4c8efc="" className="text-level-6 text">
                  {record.homeScore}
                </span>
              </div>
              <div
                data-v-2b4c8efc=""
                className="row"
                style={{ flexDirection: "row" }}
              >
                <span
                  data-v-2b4c8efc=""
                  className="text-level-6 text-ellipsis text"
                  style={{ display: "block" }}
                >

                  {record.awayTeam}
                </span>
                <div data-v-2b4c8efc="" className="spacer" />
                <span data-v-2b4c8efc="" className="text-level-6 text">

                  {record.awayScore}
                </span>
              </div>
            </div>
            <div
              data-v-2b4c8efc=""
              className="detail row"
              style={{ flexDirection: "row" }}
            >
              <button
                data-v-2b4c8efc=""
                className="button"
                style={{ width: "100%", height: 40 }}
              >
                <span data-v-2b4c8efc="" className="text">
                  <FaSearch
                    data-v-e56d064c=""
                    data-v-2b4c8efc=""
                    className="fa-solid fa-magnifying-glass"
                  />
                  View betting details
                </span>
              </button>
            </div>
          </div>
        )
      }
    </>
  );
}

export default LiveGame;
