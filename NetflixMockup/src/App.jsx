import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Header from "./components/Header/Header";
import { useContext } from "react";
import {
  NetflixContext,
  NetflixContextProvider,
} from "./context/NetflixContext";

function App() {
  const { showHeader } = useContext(NetflixContext);

  return (
    <>
      {showHeader && <Header />}
      <Switch>
        <Route path="/" exact>
          <h1>Welcome to Netflix</h1>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      <div className="link-navigation">
        <Link to="/home">Homepage</Link>
        <Link to="/welcome">Welcome</Link>
        <Link to="/login">Login</Link>
        <Link to="/">Home</Link>
      </div>
    </>
  );
}

export default App;
