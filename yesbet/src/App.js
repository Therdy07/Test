import { Routes, Route } from "react-router-dom";
import "./assets/css/Style.css"
import Navbar from "./components/Navbar";
import Prematch from "./pages/Prematch";
import Mainpage from "./pages/Mainpage";
import Inplay from "./pages/Inplay";
import Esports from "./pages/Esports";
import Casino from "./pages/Casino";
import Live from "./components/Casino/Live";
import Minigames from "./pages/Minigames";
import Soccer from "./components/Prematch/Soccer";
import Basketball from "./components/Prematch/Basketball";
import Baseball from "./components/Prematch/Baseball";
import IceHockey from "./components/Prematch/IceHockey";
import Tennis from "./components/Prematch/Tennis";
import Handball from "./components/Prematch/Handball";
import Boxing from "./components/Prematch/Boxing";
import Rugby from "./components/Prematch/Rugby";
import Aussie from "./components/Prematch/Aussie";
import Snooker from "./components/Prematch/Snooker";
import Cricket from "./components/Prematch/Cricket";
import Darts from "./components/Prematch/Darts";
import Volleyball from "./components/Prematch/Volleyball";
import Waterpolo from "./components/Prematch/Waterpolo";
import Futsal from "./components/Prematch/Futsal";
import Squash from "./components/Prematch/Squash";
import Mma from "./components/Prematch/Mma";
import GaelicFootball from "./components/Prematch/GaelicFootball";
import GaelicHurling from "./components/Prematch/GaelicHurling";
import TableTennis from "./components/Prematch/TableTennis";
import AmericanFootball from "./components/Prematch/AmericanFootball";


function App() {
  return (
    <div id="app">
      
      <div id="__layout">
        <div data-v-5fa80d04="" className="fill-height">
          <div data-v-5fa80d04="" className="fill-height">
            <div data-v-5fa80d04="" className="fill-height">
              <div data-v-5fa80d04="" className="layout column">
                <div data-v-46c9dc4f="" data-v-5fa80d04="" className="column">
                  <Navbar />
                </div>

                <Routes>
                  <Route path="/" element={<Mainpage />} />
                  <Route path="/sports/prematch" element={<Prematch />} />
                  <Route path="/sports/inplay" element={<Inplay />} />
                  <Route path="/esports/prematch" element={<Esports />} />
                  <Route path="/casino" element={<Casino />} />
                  <Route path="/casino/live/1" element={<Live />} />
                  <Route path="/games" element={<Minigames />} />
                  <Route path="/soccer/prematch" element={<Soccer />} />
                  <Route path="/basketball/prematch" element={<Basketball />} />
                  <Route path="/baseball/prematch" element={<Baseball />} />
                  <Route path="/icehockey/prematch" element={<IceHockey />} />
                  <Route path="/tennis/prematch" element={<Tennis />} />
                  <Route path="/handball/prematch" element={<Handball />} />
                  <Route path="/boxing/prematch" element={<Boxing />} />
                  <Route path="/rugby/prematch" element={<Rugby />} />
                  <Route path="/aussie/prematch" element={<Aussie />} />
                  <Route path="/american/prematch" element={<AmericanFootball />} />
                  <Route path="/snooker/prematch" element={<Snooker />} />
                  <Route path="/tabletennis/prematch" element={<TableTennis />} />
                  <Route path="/cricket/prematch" element={<Cricket />} />
                  <Route path="/dart/prematch" element={<Darts />} />
                  <Route path="/volleyball/prematch" element={<Volleyball />} />
                  <Route path="/waterpolo/prematch" element={<Waterpolo />} />
                  <Route path="/futsal/prematch" element={<Futsal />} />
                  <Route path="/squash/prematch" element={<Squash />} />
                  <Route path="/mma/prematch" element={<Mma />} />
                  <Route path="/gaelic/prematch" element={<GaelicFootball />} />
                  <Route path="/ghurling/prematch" element={<GaelicHurling />} />
                  
                </Routes>

                <div
                  data-v-f226d6e6=""
                  data-v-5fa80d04=""
                  className="row"
                  style={{ flexDirection: "row" }}
                >
                  <div
                    className="row"
                    style={{ width: "100%", flexDirection: "row" }}
                  ></div>
                </div>
                <div data-v-5fa80d04="" className="slideout-panel clearfix">
                  <div className="slideout-wrapper"></div>
                </div>
                <div data-v-5fa80d04="" className="vue-portal-target"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
