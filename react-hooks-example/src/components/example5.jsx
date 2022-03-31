import React from "react";

export default function Example5() {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        console.log('componentDidMount');

        return () => {
            // cleanup
            // componentWillUnmount의 역할을 하고있다
        }
    }, []);
    // 빈배열이 없으면 렌더가 된 이후에는 항상 불러옴
    // 빈배열이 있으면 최초에만 실행
    // 배열 안에 있는 값이 변해서 리턴될 때 useEffect를 실행해달라는 뜻이므로
    React.useEffect(() => {
        console.log('componentDidMount & componentDidUpdate by count', count);

        return () => {
            // cleanup
            // count값이 변하기 전에 실행(다음번 useEffect가 실행되기 직전의 값을 가짐)
            console.log('cleanup by count', count);
        }
    }, [count]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={click}>Click me</button>
        </div>
    );

    function click() {
        setCount(count + 1);
    }
}