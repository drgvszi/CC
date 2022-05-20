import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import home from "./pages/home";
import horror from "./pages/horror";
import romance from "./pages/romance";
import action from "./pages/action";
import adventure from "./pages/adventure";
import comic from "./pages/comic";
import crime from "./pages/crime";
import fantasy from "./pages/fantasy";


const App = () => {
  return (
    
    <Router>
      <Navbar/>
      <Routes>
        
        <Route path='/horror' component={horror} />
        <Route path='/romance' component={romance} />
     
        <Route path='/action' component={action} />
        <Route path='/adventure' component={adventure} />
        <Route path='/comic' component={comic} />

        <Route path='/crime' component={crime} />
        <Route path='/fantasy' component={fantasy} />
        <Route exact path='/'  component={home} />
        
      </Routes>
    </Router>
  );

}

export default App;
