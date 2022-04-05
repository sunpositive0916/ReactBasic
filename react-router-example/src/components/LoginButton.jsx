// import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

// export default withRouter(function LoginButton(props) {
//     console.log(props);
//     function login(){
//         setTimeout(() => {
//             // 페이지를 이동
//             props.history.push('/');
//         }, 1000)
//     }
//     return <button onClick={login}>로그인하기</button>
// });

export default  function LoginButton(props) {
    const history = useHistory();
    function login(){
        setTimeout(() => {
            // 페이지를 이동
            history.push('/');
        }, 1000)
    }
    return <button onClick={login}>로그인하기</button>
}