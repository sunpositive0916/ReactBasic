import { BrowserRouter, Route } from "react-router-dom";
import About from './pages/About';
import Home from "./pages/Home";
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/about" exact component={About} />
    </BrowserRouter>
  );
}

export default App;
