import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Body () {
    
    return (
        <div className="flex">
          <Sidebar /> 
          <div className="flex-1 min-w-0">
           <Outlet />
           </div>
        </div>
    )
}

export default Body;