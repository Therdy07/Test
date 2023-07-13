import React from "react";
import League from "../components/Inplay/League";
import SidebarPages from "../components/SidebarPages";

function Inplay() {
  return (
    <div
      data-v-5fa80d04=""
      className="contents row"
      style={{ flexDirection: "row" }}
    >
      <div
        data-v-5fa80d04=""
        className="content column"
        style={{ height: "961px" }}
      >
        <div data-v-5fa80d04="" className="column">
          <div
            data-v-5a4c8ef6=""
            data-v-5fa80d04=""
            className="wrap scrollable-auto row"
            style={{ flexDirection: "row" }}
          >
            <League />
          </div>
        </div>
      </div>
      <SidebarPages />
    </div>
  );
}

export default Inplay;
