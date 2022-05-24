import React from "react";



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Navigation,Footer} from "./components/exporter";
import{
  Home,
  MyBookshelf,
  Action,
  Romance,
  Adventure,
  Horror,
  Fiction
} from "./pages/exporters/pageExporter";



const App = () => (
  <Router>
    <Navigation />
    <Routes>

      
      <Route path="/" element={<Home />} />
      <Route path="/romance" element={< Romance/>} />
      <Route path="/action" element={< Action/>} />
      <Route path="/adventure" element={<Adventure />} />
      <Route path="/fiction" element={<Fiction />} />
      <Route path="/horror" element={<Horror />} />
      <Route path="/myShelf" element={<MyBookshelf />} />
       
      
    </Routes>
    <Footer />
  </Router>
);



export default App;
