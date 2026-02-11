import { useDispatch } from "react-redux";
import Body from "./Body";
import { toggleSideBar } from "../Utils/appSlice";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleSideBar());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      
        <div className="flex col-span-1">
          <img
            onClick={handleToggle}
            className="h-8 cursor-pointer"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb4+PiCgoIQEBCnp6fFxcXz8/OwsLB0dHTu7u76+vrd3d27u7uQkJB6enozMzPj4+NlZWUdHR2hoaHKyspeXl5vb28XFxc8PDxYWFiBgYHX19eStxeWAAACX0lEQVR4nO3dj04CMQzH8QmcggKK/BFF5f3fUi9okJi0O7akaff9PEF/uXGw0awpAQAAAAAAAAAAAAAAAEADZqvt2I/tajYs3uL5xp/nRX7AlXWxV1pl5uvW1pVebd1lBTxY11ngkBPR7xPsrfWAn9Y1FrrVAm6sKyy2URJurQsstpUD3lvXV8G9mPDBurwKHsSEc+vyKpiLCd+ty6vgXUxoXV0VjSfcWVdXwU5M+GFdXgUfYkKv+6a/5D3UyLq8CkZiwnRnXV+xOzlgmloXWGyqJEye97+9gxYwHa1LLHRUEzpfp+oa7b1YV1ngJSdgSjPrOq+WfSzc+dxEzbPOEn8sJt6O3NaTAUfeJ8vHkR+Py6HxAAAAAAAAAACAH91+OvFjuh/yv1PvaWz9X9Jg46cB+fY+m792SifN2a11qVdT29hPXq3rLPCaE/DNusoib3pA753ecpf3t866wmLa14bft8wv7W1jXV8FckC/zUJnctuQ/0WqLVN/P9b+G4sJ/bcIa03C1tVV0fgzjP85jP8ujf99GOFVIwcMsEy136Xx9xbx94cN7PEbOKfx/LbJPGtLaRT9vDTFP/PuRf/fAgAAAAAAAAAAOBL8nqjod32Fv6/Nb9tQ5p174e9NDH/3Zfz7S713mGrXCDtfoz1tnXp/hOpDjH+fd/w72ePfq++z3euSPBvBuroqGk8Yf86Mz23TJXlWkPcu757c6R1/Zlf8uWsNzM5z3MZ+ktHM7u2Q7VLGDMsG5pCmpd+v/bxZssnvHip3HnBqYKZzL/hcbgAAAAAAAAAAAAAAAADw6QtJMFO0DHiZNgAAAABJRU5ErkJggg=="
            alt="hamburgericon"
          />
          <img
            className="h-8 mx-4"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
            alt="yt-log"
          />
        </div>

      <div className="col-span-10 pl-30">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className=" border border-gray-400 p-2 rounded-r-full bg-gray-200">
          Search
        </button>
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg"
          alt="img-icon"
        />
      </div>
      {/* <Body /> */}
    </div>
  );
}

export default Header;
