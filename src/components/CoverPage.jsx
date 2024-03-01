import React from "react";
import Skills from "./Skills";
import Header from "./Header";
import Experience from "./Experience";

function CoverPage() {
  return (
    <div className='coverPage' style={{ backgroundColor: "#f0f0f0" }}>
      <Header />
      <Skills />
      <Experience />
    </div>
  );
}

export default CoverPage;
