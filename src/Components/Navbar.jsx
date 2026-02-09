import { useContext } from "react";
import LoginContext from "../Context/LoginContext";

export default function Navbar() {
  const {openLoginModal,setOpenModal} = useContext(LoginContext)
    console.log('openLoginModal', openLoginModal)
  return (
    <div className="navbar p-2">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <img
            height="200px"
            width="200px"
            src="https://cdn.cookielaw.org/logos/203308a4-18db-457d-9eea-8699134b45f8/d40a6fa7-10b5-4514-a620-d29212210529/3516446c-ae96-44a4-8649-dfe22bcecd2c/Roadtrippers.png"
            alt="logo"
          />
        </a>
      </div>
      <div className="flex-none p-4 cursor-pointer">
        <ul className="flex gap-4 text-xl">
          <li>
            About Us
          </li>
          <li>
            Contact Us
          </li>
          <li onClick={()=>setOpenModal()}>
            Login
          </li>
        </ul>
      </div>
    </div>
    // </div>
  );
}
