import './App.css';
import React from 'react';

// function Person({name, age}) {
//   console.log('Person render')
//   return (
//     <div>
//       {name} / {age}
//     </div>
//   );
// }
// React.memo는 React.PureComponent처럼 사용할 수 있다.
const Person = React.memo(({name, age}) => {
  console.log('Person render')
  return (
    <div>
      {name} / {age}
    </div>
  );
});

function App() {
  const [state, setState] = React.useState({
    text: "",
    persons: [
      {id: 1, name: 'sun', age: 7},
      {id: 2, name: 'moon', age: 17}
    ]
  });

  // 밑에서 function으로 만들면 이벤트가 처리 될 때마다 새롭게 만들어져서 렌더를 새로 하게 되기 때문에 useCallback을 사용하여 처리
  const toPersonClick = React.useCallback(() => {}, []);

  const {text, persons} = state;
  return (
    <div>
      <input type="text" value={text} onChange={change} />
      <ul>{persons.map(person => {
        return <Person {...person} key={person.id} onClick={toPersonClick()} />
      })}</ul>
    </div>
  );
  
  function change(e) {
    setState({
      ...state,
      text: e.target.value,
    });
  }
}

export default App;
