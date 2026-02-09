
import { useEffect, useState } from 'react'
import './App.css'

function App() {

const [searchInput, setSearchInput] = useState("")
const [data,setData] = useState("")

const getSearchResponse = async(searchInput) => {
  console.log("api called every 500ms ")
  const resp = await fetch(`https://dummy/${searchInput}.com`)
  const data = await resp.json()
 if(data) setData(data)
}

useEffect(()=>{

  let timer = setTimeout(()=>{
    getSearchResponse(searchInput)
  },500)


  return () => {
    clearTimeout(timer)
  }

},[searchInput])

  return (
    <>
    <label>Search something...</label>
      <input value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>
    </>
  )
}

export default App
