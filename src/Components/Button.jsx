import { useRef } from "react"

const Button = ({name}) => {

    

    return(
           
            <button className="px-2 py-2 m-2 whitespace-nowrap shrink-0 bg-gray-200 rounded-lg">{name}</button>
           
    )
}

export default Button
