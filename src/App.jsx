import { Provider } from "react-redux";
import Body from "./Components/Body";
import Header from "./Components/Header";
import store from "./Utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

function App() {
  const appRouter = createBrowserRouter([{
    path : "/",
    element : <Body />,
    children : [
      {
        path : "/",
        element : <MainContainer />
      },
      {
        path : "watch",
        element : <WatchPage />
      }
    ]
  }])
  return (
    <Provider store={store}>
    <div>
     <Header />
     <RouterProvider router={appRouter} />
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