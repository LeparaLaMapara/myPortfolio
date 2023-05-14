import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Machine Learning Research Scientist",
          "Data Scientist",
          "Software Engineer",
          "PhD Computer Science Student",
          "Open Source Contributor",
          "Photographer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
