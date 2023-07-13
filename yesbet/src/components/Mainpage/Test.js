import React from 'react'
import SidebarPages from '../SidebarPages';
import A from './A';



function Test() {

  return (
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
                    <div data-v-5fa80d04="" className="content column"
                      style={{ height: 961 }}
                    >
                      <div data-v-5fa80d04="" className="column">
                        <div
                          data-v-47fb79fe=""
                          data-v-5fa80d04=""
                          className="wrap scrollable-auto row"
                          style={{ flexDirection: "row" }}
                        >
                           <A/>
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
    </div >

  )
}

export default Test
