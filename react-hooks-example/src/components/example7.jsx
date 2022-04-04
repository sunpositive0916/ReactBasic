import React, { useCallback, useMemo, useState } from "react";

// 그냥 이렇게 사용하면 input에 값이 입력 될 때 마다 실행되므로 낭비
// 그러므로 sum함수를 useMemo로 감싸서 사용
function sum(persons){
    console.log('****sum****');
    return persons.map(person => person.age).reduce((left, right) => left + right, 0)
}


export default function Example7() {
    const [value, setValue] = useState('');
    const [persons] = useState([
        {name: 'mark', age: 39},
        {name: 'sun', age: 7}
    ]);

    // 디펜던시를 이용해서 처음 한번으로 제한
    const count = useMemo(() => {
        return sum(persons);
    },[persons])

    // 디펜던시를 추가해주면 처음 상태를 기억할 수 있음
    const click = useCallback(() => {
        console.log(value);
    })
    

    return (
        <div>
            <input value={value} onChange={change} />
            <p>{count}</p>
            <button onClick={click}>click</button>
        </div>
    );

    function change(e) {
        setValue(e.target.value);
    }
}