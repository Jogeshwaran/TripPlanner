import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";

export default function WatchPage() {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  console.log(params.get("v"));
  useEffect(() => {
    dispatch(closeSideBar());
  }, []);
  return (
    <div className="px-5">
      <iframe
        width="800"
        height="400"
        src={"https://www.youtube.com/embed/" + params.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
