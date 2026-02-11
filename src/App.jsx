import { Provider } from "react-redux";
import Body from "./Components/Body";
import Header from "./Components/Header";
import store from "./Utils/store";

function App() {
  return (
    <Provider store={store}>
    <div>
     <Header />
     <Body />
    </div>
    </Provider>
  );
}

export default App;

{/* 
        Header
        Body
        Sidebar
          Menu Items
        MainContainer
          Button LIst
          VideoContainer
          VideoCard
      
      */}