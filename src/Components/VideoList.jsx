import { useState , useEffect } from "react"
import { API } from "../Utils/Constants"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"
export default function VideoList () {
    const [videos, setVideo] = useState([])
    const getVideoDetails  = async() => {
        const videoData = await fetch(API)
        const data = await videoData.json()
        setVideo(data.items)
    } 
    useEffect(()=> {
        getVideoDetails()
    },[])
    return (
        <div className="flex flex-wrap">
            {
                
                videos?.map((video) => (
                <Link to={"/watch?v="+video.id}>
                <VideoCard key={video?.id} info={video} />
                </Link>
            ))
            }
        </div>
    )
}