import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

function Body () {
    return (
        <div className="flex">
          <Sidebar /> 
          <div className="flex-1 min-w-0">
           <MainContainer />
           </div>
        </div>
    )
}

export default Body;