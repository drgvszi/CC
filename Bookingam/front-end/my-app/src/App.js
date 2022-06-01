import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Navigation, Footer } from "./components/exporter";
import {
  Home,
  MyBookshelf,
  Action,
  Romance,
  Adventure,
  Horror,
  Fiction,
  UploadBook,
  UploadImg,
  Auth
} from "./pages/exporters/pageExporter";

import { AuthContextProvider, useAuthState } from './firebase'
const AuthenticatedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthState()

  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  return children;
}

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/romance" element={<AuthenticatedRoute> <Romance /> </AuthenticatedRoute>} />
          <Route exact path="/action" element={<AuthenticatedRoute><Action /></AuthenticatedRoute>} />
          <Route exact path="/adventure" element={<AuthenticatedRoute><Adventure /></AuthenticatedRoute>} />
          <Route exact path="/fiction" element={<AuthenticatedRoute><Fiction /></AuthenticatedRoute>} />
          <Route exact path="/horror" element={<AuthenticatedRoute><Horror /></AuthenticatedRoute>} />
          <Route exact path="/myShelf" element={<AuthenticatedRoute><MyBookshelf /></AuthenticatedRoute>} />
          <Route exact path="/uploadBook" element={<AuthenticatedRoute><UploadBook /></AuthenticatedRoute>} />
          <Route exact path="/uploadImg" element={<AuthenticatedRoute><UploadImg /></AuthenticatedRoute>} />
          <Route exact path="/auth" element={<Auth />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthContextProvider>
  )
};



export default App;
