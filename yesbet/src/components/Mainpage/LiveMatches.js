import React from "react";
import LiveGame from "./LiveGame";

function LiveMatches() {
  return (
    <div
      data-v-2b4c8efc=""
      data-v-756132ea=""
      className="live-matches scrollable-auto row"
      style={{ flexDirection: "row" }}
    >
      <div data-v-2b4c8efc="" className="column">
        <div
          data-v-2b4c8efc=""
          className="title row"
          style={{ flexDirection: "row" }}
        >
          <span
            data-v-2b4c8efc=""
            className="text"
            style={{
              color: "rgb(255, 229, 136)",
              fontWeight: "bold",
            }}
          >
            Live Matches
          </span>
        </div>
        <div
          data-v-05849275=""
          data-v-2b4c8efc=""
          className="list scrollable-auto match-list row"
          style={{ flexDirection: "row" }}
        >
          <LiveGame />
        </div>
      </div>
    </div>
  );
}

export default LiveMatches;
