import { useSelector } from "react-redux";

function Sidebar() {
    const viewSidebar = useSelector((state)=>state.app.isSideBarOpen)
    //early Return 

    if(!viewSidebar) return null
  return (
    <div className="p-5 shadow-lg w-44">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscripts</li>
        <li>History</li>
      </ul>

      <h1 className="font-bold pt-4">Explore</h1>
      <ul>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
        <li>Live</li>
        <li>Sports</li>
      </ul>

      <h1 className="font-bold pt-4">You</h1>
      <ul>
        <li>Playlists</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
        <li>Downloads</li>
      </ul>
    </div>
  );
}

export default Sidebar;
