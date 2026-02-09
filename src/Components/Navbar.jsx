import Login from "./Login";
import Signup from "./Signup";

export default function Navbar (){
    return (
        <div className="flex justify-between items-center cursor-pointer p-5 font-semibold text-xl text-shadow-amber-50 text-white">
            <img height= "200px" width="200px" src="https://cdn.cookielaw.org/logos/203308a4-18db-457d-9eea-8699134b45f8/d40a6fa7-10b5-4514-a620-d29212210529/3516446c-ae96-44a4-8649-dfe22bcecd2c/Roadtrippers.png" alt="logo"/>
            <div className="flex gap-4">
                <Login />
                <Signup />
            </div>
        </div>
    )
}