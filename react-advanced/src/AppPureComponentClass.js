import './App.css';
import React from 'react';

// React.Component가 아니라 React.PureComponent를 상속받게 되면 shouldComponentUpdate를 처리한 효과
class Person extends React.PureComponent {
  // input에 타이핑을 할 때 마다 렌더가 다시 되는 것을 막는다
  // shouldComponentUpdate(previousProps) {
  //   for(const key in this.props) {
  //     if(previousProps[key] !== this.props[key]){
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  render() {
    console.log('Person render');
    const {name, age} = this.props;
    return (
      <div>
        {name} / {age}
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    text: "",
    persons: [
      {id: 1, name: 'sun', age: 7},
      {id: 2, name: 'moon', age: 17}
    ]
  };

  render() {
    const {text, persons} = this.state;
    return (
      <div>
        <input type="text" value={text} onChange={this._change} />
        <ul>{persons.map(person => {
          return <Person {...person} key={person.id} onClick={toPersonClick()} />
        })}</ul>
      </div>
    );
  }
  
  _change = (e) => {
    this.setState({
      ...this.state,
      text: e.target.value,
    });
  }
  toPersonClick = () => {}
}

export default App;
