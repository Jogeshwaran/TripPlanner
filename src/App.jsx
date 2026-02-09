import Body from "./Components/Body"
import LoginContext, { LoginContextProvider } from "./Context/LoginContext"
function App() {
  return (
    <div  className="bg-blue-400 min-h-screen">
    <LoginContextProvider>
    <Body />
    </LoginContextProvider>
    </div>
  )
}

export default App
