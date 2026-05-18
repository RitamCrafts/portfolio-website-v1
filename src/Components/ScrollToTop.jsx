import React, { useEffect, useState } from 'react'

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showButton && (
        <button
          className="fixed bottom-4 cursor-pointer right-4 z-50 p-3 rounded-full shadow-2xl transition-all hover:scale-110 bg-orange-500 hover:bg-orange-600 text-white"
          aria-label="Scroll to top"
          onClick={() => {
            history.replaceState(null, "", " ");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-up"
          >
            <path d="m5 12 7-7 7 7"></path>
            <path d="M12 19V5"></path>
          </svg>
        </button>
      )}
    </>
  );
}

export default ScrollToTop;