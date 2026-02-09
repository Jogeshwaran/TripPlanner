import { createContext, useState } from "react";


const LoginContext = createContext();

export const LoginContextProvider = ({children}) => {
    const [openLoginModal, setOpenLoginModal] = useState(false)

    const setOpenModal = () => {
        setOpenLoginModal(prev => !prev)
    
    }

    return(
        <LoginContext.Provider value={{openLoginModal,setOpenModal}}>
            {children}
        </LoginContext.Provider>
    )
}





export default LoginContext;