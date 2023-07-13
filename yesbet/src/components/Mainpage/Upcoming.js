import React from "react";
import { useState, useEffect } from 'react'
import axios from 'axios';

function Upcoming() {

  useEffect(() => {
    getRecords();
}, [])

const [records, setRecords] = useState([])
const [loading, setLoading] = useState(false)

const getRecords = async () => {
    try {
        const res = await axios.get("https://api.dashboard-yes.bet/sports/featured")
        setRecords(res.data.data.prematch)
        setLoading(true)
        console.log(res);
    } catch (err) {
        alert(err.message);
    }
}

  return (
    <div
      data-v-4dc2aaba=""
      data-v-756132ea=""
      className="upcoming row"
      style={{ flexDirection: "row" }}
    >
      <div data-v-4dc2aaba="" className="column">
        <div
          data-v-4dc2aaba=""
          className="title row"
          style={{ flexDirection: "row" }}
        >
          <span
            data-v-4dc2aaba=""
            className="text"
            style={{
              color: "rgb(255, 229, 136)",
              fontWeight: "bold",
            }}
          >
            Upcoming
          </span>
        </div>
        <div data-v-4dc2aaba="" className="match-list scrollable-auto column">

        {
           loading &&
           records.map(record =>{
              return (
                <div key={record.matchId}>
                 
                        <div
                        data-v-4dc2aaba=""
                        className="match row"
                        style={{ flexDirection: "row" }}

                      >
                        <div
                          data-v-4dc2aaba=""
                          className="date row"
                          style={{ flexDirection: "row" }}
                        >
                          <span data-v-4dc2aaba="" className="text">
                          {record.startAt}
                          </span>
                        </div>
                        <div
                          data-v-4dc2aaba=""
                          className="event row"
                          style={{ flexDirection: "row" }}
                        >
                          <div
                            data-v-4dc2aaba=""
                            className="row"
                            style={{ flexDirection: "row" }}
                          >
                            <img
                              alt=""
                              data-v-4dc2aaba=""
                              src="https://assets.support-yes.bet/img/1.e26e720.svg"
                              className="sports-icon"
                            />
                          </div>
                          <span data-v-4dc2aaba="" className="text">
                          {record.sportName}
                          </span>
                        </div>
                        <div
                          data-v-4dc2aaba=""
                          className="league row"
                          style={{ flexDirection: "row" }}
                        >
                          <div
                            data-v-78fee962=""
                            data-v-4dc2aaba=""
                            className="tournament-icon row"
                            style={{ flexDirection: "row" }}
                          >
                            <img
                              alt=""
                              data-v-78fee962=""
                              src="https://mt-sportradar.com/assets/images/regions/4.png"
                            />
                          </div>
                          <span data-v-4dc2aaba="" className="text">
                          {record.tournament.name}
                          </span>
                        </div>
                        <div
                          data-v-4dc2aaba=""
                          className="team row"
                          style={{ flexDirection: "row" }}
                        >
                          <span data-v-4dc2aaba="" className="text">
                          {record.homeTeam}
                          </span>
                          <span
                            data-v-4dc2aaba=""
                            className="margin-horizontal-5 vs text"
                            style={{ color: "rgb(255, 229, 136)" }}
                          >
                            vs
                          </span>
                          <span data-v-4dc2aaba="" className="text">
                          {record.awayTeam}
                          </span>
                        </div>
      
                      </div>
                  
                </div>
              )
            })
          }



        </div>
      </div>
    </div>
  );
}

export default Upcoming;
