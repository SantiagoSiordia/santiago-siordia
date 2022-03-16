import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Cibersecurity Expert",
          "Ethical Hacker",
          "Mobile Developer",
          "JavaScript Junkie",
          "React Native Engineer",
          "Tech lover",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
