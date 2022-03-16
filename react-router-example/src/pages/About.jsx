import queryString from 'query-string';

export default function About(props) {
    const searchParams = props.location.search;
    console.log(searchParams);

    // URLSearchParams의 단점
    // 1. key, value를 바로 꺼내 쓸수가 없다.
    // 2. 브라우저 내장객체이기 때문에 브라우저에 따라 성능이 다름(IE는 지원 안함)
    // const obj = new URLSearchParams(searchParams);
    // console.log(obj.get("name"));

    const query = queryString.parse(searchParams);
    console.log(query);
    return (
        <div>
            <h2>About 페이지입니다.</h2>
            {query.name && <p>name은 {query.name}입니다.</p>}
        </div>
    );
}