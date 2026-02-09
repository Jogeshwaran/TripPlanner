import { useContext } from "react";
import Body from "./Components/Body";
import LoginModal from "./Components/LoginModal";
import LoginContext from "./Context/LoginContext";

function App() {
  const { openLoginModal } = useContext(LoginContext);
  return (
    <div className="bg-blue-400 min-h-screen">
      <div>
        {<Body /> } 
      </div>
    </div>
  );
}

export default App;
