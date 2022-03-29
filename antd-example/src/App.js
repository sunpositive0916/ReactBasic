import logo from './logo.svg';
import './App.css';
import { Calendar, Row, Col } from 'antd';
import { GithubOutlined } from "@ant-design/icons";

const colStyle = () => ({
  height:50,
  backgroundColor: 'red',
  opacity: Math.round(Math.random() * 10) / 10,
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <GithubOutlined />
        </p>
        <Calendar />
      </header>
      <Row>
        <Col span={12} style={colStyle()} />
        <Col span={12} style={colStyle()} />
      </Row>
      <Row>
        <Col span={8} style={colStyle()} />
        <Col span={8} style={colStyle()} />
        <Col span={8} style={colStyle()} />
      </Row>
      <Row>
        <Col span={6} style={colStyle()} />
        <Col span={6} style={colStyle()} />
        <Col span={6} style={colStyle()} />
        <Col span={6} style={colStyle()} />
      </Row>
      <Row gutter={16}>
        <Col span={12} style={colStyle()} />
        <Col span={12} style={colStyle()} />
      </Row>
      <Row gutter={16}>
        <Col span={12} style={colStyle()} offset={12} />
      </Row>
      <Row gutter={16}>
        <Col span={8} style={colStyle()} />
        <Col span={8} style={colStyle()} offset={8} />
      </Row>
      <Row gutter={16}>
        <Col span={6} style={colStyle()} />
        <Col span={6} style={colStyle()} offset={3} />
        <Col span={6} style={colStyle()} offset={3} />
      </Row>
    </div>
  );
}

export default App;
