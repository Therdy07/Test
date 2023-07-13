import React, { useEffect, useState } from "react";
import fixture from "./fixture.json";

function Soccer() {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        return response.json();
      })
      .then(data => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
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
            <img
              data-v-78fee962=""
              src="https://mt-sportradar.com/assets/images/regions/4.png"
              alt=""
            />
          </div>
          {users && users.length > 0 && users.map((userObj, index) => (
          <div
            data-v-47fb79fe=""
            className="league-name text-ellipsis row"
            style={{ flexDirection: "row", display: "block" }}
            key={userObj.id}
          >
            {userObj.name}
          </div>
         ))}
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
            <span data-v-47fb79fe="" className="text-level-11 text">
              Home Team
            </span>
            <span data-v-47fb79fe="" className="text-level-11 text">
              Draw
            </span>
            <span data-v-47fb79fe="" className="text-level-11 text">
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
              06/17
            </div>
            <div
              data-v-47fb79fe=""
              className="time row"
              style={{ flexDirection: "row" }}
            >
              03:45
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
                <img
                  data-v-cc68f3fe=""
                  src="https://img.mt-sportradar.com/ls/crest/big/4818.png"
                  className=""
                  alt=""
                  style={{ height: 14 }}
                />
              </div>
              <span data-v-47fb79fe="" className="text">
                Andorra
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
                <img
                  data-v-cc68f3fe=""
                  src="https://img.mt-sportradar.com/ls/crest/big/4699.png"
                  className=""
                  alt=""
                  style={{ height: 14 }}
                />
              </div>
              <span data-v-47fb79fe="" className="text">
                Switzerland
              </span>
            </div>
          </div>
        </div>
        <div
          data-v-47fb79fe=""
          className="odds row"
          style={{ flexDirection: "row" }}
        >
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
              <button data-v-6bf0219c="" className="button">
                <span data-v-6bf0219c="" className="odd text">
                  41.00
                </span>
              </button>
            </div>
            <div
              data-v-6bf0219c=""
              data-v-47fb79fe=""
              className="outcome row"
              style={{ flexDirection: "row" }}
            >
              <button data-v-6bf0219c="" className="button">
                <span data-v-6bf0219c="" className="odd text">
                  11.00
                </span>
              </button>
            </div>
            <div
              data-v-6bf0219c=""
              data-v-47fb79fe=""
              className="outcome row"
              style={{ flexDirection: "row" }}
            >
              <button data-v-6bf0219c="" className="button">
                <span data-v-6bf0219c="" className="odd text">
                  1.05
                </span>
              </button>
            </div>
          </div>
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
                  +34
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Soccer;
