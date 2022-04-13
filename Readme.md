# 리액트란
`자바스크립트 라이브러리`
- 페이스북에서 제작(오픈소스)
- UI를 담당하는 라이브러리
- 웹과 모바일을 위한 하나의 완성된 자바스크립트 라이브러리
- 현재 가장 인기있는 라이브러리(2020년 기준 사용도 1위 / 관심과 만족도는 스벨트가 1위)
- Angular, Blazor와 같은 `프레임워크가 아니다`
- JQuery와 같은 자바스크립트 라이브러리
- BUT, MVC와 같은 디자인 패턴은 아니다.
- `A Javascript library for building user interfaces`

[리액트 인기 있는 이유]
- 컴포넌트
- Virtual DOM
- 페이스북에서 관리하는 오픈소스
- JSX(JS + HTML)

[리액트 기본 생성 프로젝트]
- > create-react-app
- > dotnet new react
- > npm start


### SPA 프로젝트 배포 예제
[serve 패키지로 배포]
serve build
serve -s build(리액트 앱에서 직접 404 처리를 할 예정이므로 -s옵션을 붙여야함)

[AWS S3에 배포]
- 버킷 만들기(이름, 리전만 선택)
- 파일 업로드(build 폴더 안에 있는 전체 파일)
- 폴더추가(파일 외에 있는 폴더 static)
* 속성탭
- 정적 웹 사이트 호스팅 편집 활성화
- 정적 웹사이트 호스팅 체크
- 인덱스 문서, 오류 문서 : index.html
* 권한 탭
- 퍼블릭 엑세스 차단 활성화 체크 삭제
- 버킷정책 편집
- 정책 생성기를 통해 Json 생성
/////////////// 예시 ///////////////
 {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::버킷 이름/*"
        }
    ]
}

[NginX로 배포]
- AWS EC2를 생성
- EC2 대시보드에서 인스턴스 시작
- 우분투 서버 선택(별다른 설정 없이 넘김)
- 보안 그룹 구성에서 이름 변경하고 SSH 기본으로 되어있고 HTTP를 추가로 선택
- 시작하기 클릭하면 뜨는 레이어에서 '새 키페어 설정' 키페어 이름은 알아서 정하기 (예 : reactserve)
- 인스턴스 시작
- 이름 변경
- 퍼블릭 주소 복사(예 : 3.36.117.32)
- 터미널로 이동
- 해당 폴더에 reactserve.pem 파일 넣어둔 상태여야함
- > ssh ubuntu@3.36.117.32 -i reactserve.pem
- > chmod 400 reactserve.pem
- > ssh ubuntu@3.36.117.32 -i reactserve.pem
- ~$ git clone https://github.com/nhn-kai/tic-tac-toe.git
- ~$ cd tic-tac-toe
- ~/tic-tac-toe$ url -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
(끝에 있는 export~ 스크립트 복사)
- ~/tic-tac-toe$ nano ~/.profile(여기에 붙여넣기)
- ~/tic-tac-toe$ exit
- > ssh ubuntu@3.36.117.32 -i reactserve.pem
- ~$ cd tic-tac-toe
- ~/tic-tac-toe$ nvm install
- ~/tic-tac-toe$ npm ci
- ~/tic-tac-toe$ npm run build
- ~/tic-tac-toe$ sudo apt-get update
- ~/tic-tac-toe$ sudo apt-get upgrade
- ~/tic-tac-toe$ wget http://nginx.org/keys/nginx_signing.key
- ~/tic-tac-toe$ sudo apt-key add nginx_signing.key
- ~/tic-tac-toe$ sudo rm -rf nginx_signing.key
- ~/tic-tac-toe$ sudo nano /etc/apt/sources.list
``` 제일 아래쪽에 두줄 추가
deb http://nginx.org/packages/mainline/ubuntu/ trusty nginx
deb-src http://nginx.org/packages/mainline/ubuntu/ trusty nginx
```컨트롤 에스 와이
- ~/tic-tac-toe$ sudo apt-get update
- ~/tic-tac-toe$ sudo apt-get upgrade
- ~/tic-tac-toe$ sudo apt-get install nginx
- ~/tic-tac-toe$ nginx -v

- ~/tic-tac-toe$ sudo rm -rf /etc/nginx/sites-available/default
- ~/tic-tac-toe$ sudo namo /etc/nginx/sites-available/default
```미리 설정한 설정값 추가
server {
    listen       80;
    server_name  localhost;

    root   /home/ubuntu/tic-tac-toe/build;
    index  index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```
- ~/tic-tac-toe$ sudo service nginx restart

[node.js express로 배포]
> npm i express
> code .
server.js 파일 생성
```
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

// http://localhost:9000/test 에서도 잘 나오게 하기 위해서
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
```
> node server.js
http://localhost:9000/ 에서 확인 가능
