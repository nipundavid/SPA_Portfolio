import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Layouts/NavBar";
import Footer from "./Components/Layouts/Footer";
// React Router
import { Switch, Route } from "react-router-dom";
// Import Pages
import Home from "./Components/Pages/Home";
import Contacts from "./Components/Pages/Contacts";
import News from "./Components/Pages/News";
import Details from "./Components/Pages/Details";
import NotFoundPage from "./Components/Pages/NotFoundPage";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/news" component={News}></Route>
        <Route path="/contacts" component={Contacts}></Route>
        <Route path="/details" component={Details}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
