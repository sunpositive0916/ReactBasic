import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import About from './pages/About';
import Home from "./pages/Home";
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Login from "./pages/Login";
import Links from "./components/Links";
import NavLinks from "./components/NavLinks";

const isLogin = false;

function App() {
  return (
    <BrowserRouter>
    {/*
    리액트 애플리케이션의 특성을 담은 경로가 아니라 페이지 이동이기 때문에 a링크는 적절하지 않음
    <a href="/">Home</a>
    */}
      <Links />
      <NavLinks />
      <Switch>
        <Route path="/login" render={() => (isLogin ? <Redirect to="/" /> : <Login />)} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" exact component={About} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
