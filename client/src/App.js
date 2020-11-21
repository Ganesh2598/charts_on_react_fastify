import { React } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom"
import './App.css';
import Navbar from "./components/nav";
import Scatter from "./components/scatterChart";
import Stackedbar from "./components/stackedbar";

function App() {

  return (
        <>
          <Navbar></Navbar>
          <BrowserRouter>
            <Route path={"/"} exact component={Scatter}></Route>
            <Route path={"/stackedbar"} component={Stackedbar}></Route>
          </BrowserRouter>
        </>    
  );
}

export default App;
