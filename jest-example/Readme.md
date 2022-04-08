## [Unit Test]

- 사람을 믿겠는가? 테스트 코드를 믿겠는가?
  - 실제로는 사람이 아니라 사람의 감
  - 코드는 거짓말을 하지 않음
- 통합테스트에 비해 빠르고 쉽다
- 통합테스트를 진행하기 전에 문제를 찾을 수 있음
  - 그렇다고 통합테스트가 성공하리란 보장은 없음
- 테스트코드가 살아있는(동작을 설명하는) 명세가 됨
  - 테스트를 읽고 어떻게 동작하는지도 예측 가능
- 소프트웨어 장인이 되려면 TDD를 해야함
  - 선 코딩 후 (몰아서) 단위테스트를 하지 말 것

## [Jest(facebook의 오픈소스)]

- 리액트 영향이 크겠지만 가장 핫한 테스트 도구
- Easy Setup
- Instant Feddback
  - 고친 파일만 빠르게 테스트
- Snapshot Testing
  - 컴포넌트 테스트에 중요한 역할을 하는 스냅샷

## 비동기 로직 테스트 방법

- callback
- promise
- async-await