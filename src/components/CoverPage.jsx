import React from "react";
import Skills from "./Skills";
import HeaderCover from "./Header";
import Experience from "./Experience";

function CoverPage() {
  return (
    <div className='coverPage' style={{ backgroundColor: "#f0f0f0" }}>
      <HeaderCover />
      <Skills />
      <Experience />
    </div>
  );
}

export default CoverPage;
