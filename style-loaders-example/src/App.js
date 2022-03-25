import logo from './logo.svg';
// import './App.css';
// import './App.scss';
import styles from './App.module.css';

import Button from './components/Button';

console.log(styles);
// {
//   App: "App_App__VV1nl"
//   App-logo-spin: "App_App-logo-spin__ienhl"
//   header: "App_header__NHtGD"
//   link: "App_link__z57n6"
//   logo: "App_logo__4Inw6"
// }

function App() {
  return (
    <div className={styles['App']}>
      <header className={styles['header']}>
        <img src={logo} className={styles['logo']} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Button</Button>
      </header>
    </div>
  );
}

export default App;
