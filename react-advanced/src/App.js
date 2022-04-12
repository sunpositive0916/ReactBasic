import './App.css';
import React from 'react';
import Modal from './components/Modal';

function App() {
  const [visible, setVisible] = React.useState(false);

  const open = () => {
    setVisible(true);
  }
  const close = () => {
    setVisible(false);
  }

  return (
    <div>
      <button onClick={open}>open</button>
      {visible && (
        <Modal>
          <div style={{width:'100vw', height:'100vh', background: 'rgba(0,0,0,.5)'}} onClick={close}>Hello</div>
        </Modal>
      )}
    </div>
  );
}

export default App;
