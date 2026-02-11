import { useEffect, useRef, useState } from "react";
import Button from "./Button";

const ButtonList = () => {
  let buttonList = [
    "All",
    "world cup",
    "fifa 26",
    "Music",
    "Twnty20 Cricket",
    "Podcasts",
    "APIs",
    "Computer program",
    "Thoughts",
    "Premier League",
    "Football",
    "TamilCinema",
    "Comedy",
    "Sitcoms",
  ];
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const scrollBehaviour = () => {
    const el = scrollRef.current;
    if (!el) return;
    console.log("scrollLeft:", el.scrollLeft);
    console.log("clientWidth:", el.clientWidth);
    console.log("scrollWidth:", el.scrollWidth);
    console.log("right edge:", el.scrollLeft + el.clientWidth);
    console.log("------------");

    let isAtLeft = el.scrollLeft === 0;
    let isRight = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

    setShowLeft(!isAtLeft);
    setShowRight(!isRight);
  };

  useEffect(() => {
    scrollBehaviour();
    const el = scrollRef.current;
    el.addEventListener("scroll", scrollBehaviour);

    return () => {
      el.removeEventListener("scroll", scrollBehaviour);
    };
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex items-center overflow-hidden gap-2 w-full">
      {showLeft && (
        <button className="shrink-0" onClick={scrollLeft}>
          ◀️
        </button>
      )}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide whitespace-nowrap scroll-smooth flex-1 min-w-0"
      >
        {buttonList.map((name) => (
          <Button name={name} />
        ))}
      </div>
      {showRight && (
        <button className="shrink-0" onClick={scrollRight}>
          ▶️
        </button>
      )}
    </div>
  );
};

export default ButtonList;
