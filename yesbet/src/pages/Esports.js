import React from "react";
import League from "../components/Esports/League";
import SidebarPages from "../components/SidebarPages";

function Esports() {
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
            data-v-ee8420c2=""
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

export default Esports;
