import React, { createRef, useRef, useState } from "react";


export default function Example8() {
    const [value, setValue] = useState('');
    const input1Ref = createRef();
    const input2Ref = useRef();

    console.log(input1Ref.current, input2Ref.current);


    return (
        <div>
            {/* 컨트롤드 */}
            <input value={value} onChange={change} />
            {/* 언컨트롤드(createRef) : 레퍼런스를 생성해서 렌더 될 때 넣어줌 */}
            <input ref={input1Ref} />
            {/* 언컨트롤드(useRef) : 렌더 사이에 상태를 유지 */}
            <input ref={input2Ref} />
        </div>
    );

    function change(e) {
        setValue(e.target.value);
    }
}