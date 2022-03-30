import React from 'react';

class UncontrolledComponent extends React.Component {
    inputRef = React.createRef();

    render() {
        console.log("initial render", this.inputRef);
        return (
            <div>
                <input ref={this.inputRef} />
                <button onClick={this.click}>전송</button>
            </div>
        )
    }

    componentDidMount() {
        console.log("componentDidMount", this.inputRef);
    }

    click = () => {
        // input 엘리먼트의 현재 상태값을 꺼내서 전송한다.
        // 이 코드는 버츄얼돔이 아닌 실제 돔을 활용하기때문에 리액트는 지양하는 방식
        // const input = document.querySelector("#my-input");
        // console.log(input.value);
        
        // 실제 돔에서 가져오는 방식이 아닌 참조하는 방식
        console.log(this.inputRef.current.value);
    }
}

export default UncontrolledComponent;