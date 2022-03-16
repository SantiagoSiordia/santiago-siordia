import React, { FC } from "react";
import Particles from "react-tsparticles";

const Home: FC = () => {
  const particlesLoaded = async (container: any) => {
    console.log(container);
  };

  console.log("hello");

  return (
    <div>
      <h1>This is my home!</h1>
      <Particles
        id="tsparticles"
        url="http://foo.bar/particles.json"
        loaded={particlesLoaded}
      />
    </div>
  );
};

export default Home;
