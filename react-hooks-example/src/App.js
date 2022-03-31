import logo from './logo.svg';
import './App.css';
import Example1 from './components/example1';
import Example2 from './components/example2';
import Example3 from './components/example3';
import Example4 from './components/example4';
import Example5 from './components/example5';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Example1 />
        <Example2 />
        <Example3 />
        <Example4 />
        <Example5 />
      </header>
    </div>
  );
}

export default App;
