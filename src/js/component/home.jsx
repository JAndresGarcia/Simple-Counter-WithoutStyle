import React from "react";
import Timer from "./counter.jsx";

//create your first component
const Home = () => {
  return (
	  <div className="text-primary text-center fs-1">
		<p>Hola, soy un timer simple</p>
		<div className="">
			<Timer/>
		</div>
    </div>
  );
};

export default Home;
