import React from "react";
import Register from "../components/Mainpage/Register";
import Favorite from "../components/Mainpage/Favorite";
// import Card from "../components/Mainpage/Card";
import Upcoming from "../components/Mainpage/Upcoming";
import LiveMatches from "../components/Mainpage/LiveMatches";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Mainpage/Footer";

function Mainpage() {
  return (
    <>
      <div
        data-v-5fa80d04=""
        className="contents row"
        style={{ flexDirection: "row" }}
      >
        <div
          data-v-5fa80d04=""
          className="content column"
          // style={{ height: "961px" }}
        >
          <div data-v-5fa80d04="" className="column">
            <div data-v-756132ea="" data-v-5fa80d04="" className="main column">
              <div
                data-v-756132ea=""
                className="main-header row"
                style={{ flexDirection: "row" }}
              >
                <Register />
                <Favorite />
              </div>
              {/* <div
                data-v-05849275=""
                data-v-4953cbbe=""
                data-v-756132ea=""
                className="list scrollable-auto card row"
                style={{ flexDirection: "row" }}
              >
                <Card />
              </div> */}
              <div
                data-v-756132ea=""
                className="matches row"
                style={{ flexDirection: "row" }}
              >
                <Upcoming />
                <LiveMatches />
              </div>
              <Footer />
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default Mainpage;
