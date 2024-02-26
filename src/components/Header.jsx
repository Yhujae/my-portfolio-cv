import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";

function HeaderCover() {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      lastScrollTop = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = (buttonName) => {
    // Scroll to the top only if the active button changes
    if (buttonName !== activeButton) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    setActiveButton(buttonName);
  };

  return (
    <div className={`header ${isVisible ? "visible" : "hidden"}`}>
      <div className='logo'>
        <h3>
          <b>Yhujae Dev</b>
        </h3>
      </div>
      <div className='menu'>
        <Link
          to='/coverPage'
          className={
            location.pathname === "/coverPage" ? "active about" : "about"
          }
        >
          <button onClick={() => handleButtonClick("about")}>
            <p>About</p>
          </button>
        </Link>
        <hr />
        <Link
          to='/project'
          className={
            location.pathname === "/project" ? "active project" : "project"
          }
        >
          <button onClick={() => handleButtonClick("project")}>
            <p>Projects</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeaderCover;
