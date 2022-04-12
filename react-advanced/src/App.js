import './App.css';
import React from 'react';
import Modal from './components/Modal';
import MyInput from './components/MyInput';

function App() {
  const myInputRef = React.useRef();

  const click = () => {
    console.log(myInputRef.current.value);
  }

  return (
    <div>
      <MyInput ref={myInputRef} />
      <button onClick={click}>send</button>
    </div>
  );
}

export default App;
