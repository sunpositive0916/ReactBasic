import React from "react";

export default function Example3() {
    const [state, setState] = React.useState({count: 0});

    return (
        <div>
            <p>You clicked {state.count} times</p>
            <button onClick={click}>Click me</button>
        </div>
    );

    function click() {
        // setState({count: state.count + 1});
        // 기존 state값에 의존적으로 처리하고싶지 않다면 하위 방법을 사용
        setState((state) => {
            return {
                count: state.count + 1,
            };
        });
    }
}