# Component Lifecycle

[Declarative]
- Initialization : 생성자(constructor) 부분을 의미 / props와 state가 셋팅
- Mounting : 브라우저에 그려지는 부분(render) / render직전 -> render -> render직후
- Updation : props가 바뀌거나 state가 바뀌는 부분(모두 동일한데 props 변경시에만 처음에 componentWillReceiveProps라는 hook이 있음)
- Unmounting : 브라우저에서 사라지는 부분(사라지기 직전에 대한 설정만 가능)

<hr>

## Component Lifecycle(< v16.3)

[생성 및 마운트]
- constructor : 생성되는 구간
- componentWillMount : 마운트 되기 직전
- render : 마운트되는 구간(최초 렌더)
- componentDidMount : 마운트 된 직후

[props, state 변경]
- componentWillReceiveProps
    - props를 새로 지정했을 떄 바로 호출
    - state의 변경에는 반응하지 않음
        - props의 값에 따라 state를 변경해야 한다면 setState를 이용해 변경해야 한다
        - 그러면 다음 이벤트로 각각 가는 것이 아니라 한번에 변경
- shouldComponentUpdate
    - props만, state만, 둘 다 변경 되어도 실행
    - newProps와 newState를 인자로 해서 호출
    - return type이 `boolean`
        - true면 render
        - false면 render가 호출되지 않음
        - 이 함수를 구현하지 않으면, 디폴트는 true
- componentWillUpdate
    - 컴포넌트가 재 랜더링 되기 직전에 불림
    - 여기선 setState를 쓰면 안됨
- render
- componentDidUpdate
    - 컴포넌트가 재 랜더링을 마치면 불림

[언마운트]
- componentWillUnmount
    - 언마운트 되기 직전
    - 컴포넌트가 사용하던 메모리중에 정리할 것 있으면 정리
    - API 응답을 받기 전에 언마운트 된다면 API를 받을 준비를 하지 않는 등

<hr>

## Component Lifecycle(v16.3)

[생성 및 마운트]
- constructor
- ~~componentWillMount~~ -> getDerivedStateFromProps
- render
- componentDidMount

[props, state 변경]
- ~~componentWillReceiveProps~~ -> getDerivedStateFromProps
- shouldComponentUpdate
- render
- ~~componentWillUpdate~~ -> getSnapshotBeforeUpdate
    - DOM에 적용되기 직전(그래서 render 다음으로 바뀜)
- componentDidUpdate

[언마운트]
- componentWillUnmount


### Component 에러 캐치
- ComponentDidCatch