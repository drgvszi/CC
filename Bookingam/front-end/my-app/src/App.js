import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Navigation,NavigationLogged, Footer } from "./components/exporter";
import {
  Home,
  MyBookshelf,
  Action,
  Romance,
  Adventure,
  Horror,
  Fiction,
  UploadBook,
  Login,
  Register
} from "./pages/exporters/pageExporter";

import { AuthContextProvider, useAuthState } from './firebase'

const Navbar = () => {
  const { isAuthenticated } = useAuthState()
      return (
        <>
        {!isAuthenticated ? <Navigation /> : <NavigationLogged />}
        </> 
      );
};
const AuthenticatedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthState()
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

const AlreayLogged = ({ children }) => {
  const { isAuthenticated } = useAuthState()

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
         <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/romance" element={  <Romance />  } />
          <Route exact path="/action" element={ <Action /> } />
          <Route exact path="/adventure" element={ <Adventure /> } />
          <Route exact path="/fiction" element={ <Fiction /> } />
          <Route exact path="/horror" element={ <Horror /> } />
          <Route exact path="/myShelf" element={<AuthenticatedRoute><MyBookshelf /></AuthenticatedRoute>} />
          <Route exact path="/uploadBook" element={<AuthenticatedRoute><UploadBook /></AuthenticatedRoute>} />
          <Route exact path="/login" element={<AlreayLogged><Login /></AlreayLogged>} />
          <Route exact path="/register" element={<AlreayLogged><Register /></AlreayLogged>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthContextProvider>
  )
};



export default App;
