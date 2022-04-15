import React from "react"
import TopBar from "./TopBar"
import {Outlet} from "react-router-dom"

function MainLayout() {
  return(
    <div className="flex flex-col">
    <TopBar/>
      <div className="flex-1">
      <Outlet/>
        </div>
    </div>
  );
}
export default MainLayout;