import React from "react";
// import NetflixSeries from "./components/NetflixSeries";
// import "./components/Netflix.css"
import "./components/Netflix.module.css"
// import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventProps";
// import { EventPropagation } from "./components/EventPropagation";
// import { State } from "./Hooks/State";
// import { DericatedState } from "./Hooks/DericatedState";
// import { DerivedState  } from "./components/DerivedState";
import { LiftingState } from "./components/LiftStateUp";
import { ToggleSwitch } from "./Projects/Toggleswitch/ToggleSwitch";

export const App = () => {
  // return React.createElement("h1", null,"heloo world");
  return (
    // if we dont give div it will give error as parent div is need so replacing it we can put fragment

    // or direct fragment also we can write
    // or without fragment we can also use tickle like this <> </>
    <section className="container"> 

      {/* <h1 className="card-heading">List of best Netflix Series</h1> */}

      {/* <NetflixSeries /> */}
      {/* <EventHandling/> */}
      {/* <EventProps/> */}
      {/* <EventPropagation/> */}
      {/* <State/> */}
      {/* <DerivedState/> */}
      {/* <LiftingState/> */}
      <ToggleSwitch/>
      
    </section>
  );
};



export default App;
