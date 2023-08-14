"use client"
const ScrollButton = () => {
  let scrollDistance;
  
  const handleScrollDown = () => {
    if (window.innerWidth < 1024 && window.innerWidth > 760) {
      scrollDistance = 550;
    } else if (window.innerWidth < 1280 && window.innerWidth > 1024) {
      scrollDistance = 700;
    } else if (window.innerWidth < 640 && window.innerWidth > 320) {
      scrollDistance = 780;
    } else if (window.innerWidth < 320) {
      scrollDistance = 400;
    } else {
      scrollDistance = 620;
    }
    
    window.scrollTo({
      top: scrollDistance,
      behavior: "smooth",
    });
  };

  return (
    <button className="w-6 h-9 border-white text-white border-2 rounded-2xl flex items-center justify-center cursor-pointer" onClick={handleScrollDown}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"></path>
              </svg>
            </button>
  )
}

export default ScrollButton