# wanted_pre_onboarding 선발 과제
제시된 6 가지 애플리케이션 중 2 가지 이상 react로 구현

## 구현 방법
함수형 컴포넌트와 스타일 컴포넌트를 사용하여 구현

- 함수형 컴포넌트
  - React Hooks 중 useState와 useEffect를 최근에 알게되어 실제로 사용해보고 싶었습니다.
  
- 스타일 컴포넌트
  - 컴포넌트의 css 스타일을 상속받아 사용할 수 있고, html태그에 비하여 이름이 직관적이라는 장점이 있어 편리하다고 생각되었습니다.
  

### Modal.js
useState에 styled-component의 display 값을 갖는 state를 설정해 놓았습니다.

3항 연산자와 onClick이벤트를 활용하여 open 버튼을 클릭하면 모달 창이 none -> block으로, 

X 버튼을 클릭하면 block -> none으로 변경될 수 있도록 하였습니다.


### Toggle.js
styled-components의 keyframes를 이용하여 움직임을 작성 후

useState에 boolean 값을 갖는 flag state를 설정 하였습니다.

ToggleButton의 props로 값을 전달하여 onClick 시 props 값에 따라 작성된 keyframes로 animation을 주었습니다.

페이지 로드 시 animation이 최초 1회 실행되는 것을 방지하고자 useEffect를 이용하여 animation-play-state를 paused할 수 있도록 하였습니다.


### Tab.js
useState로 state 3개를 설정하여 각각 li의 색상 값을 저장해 두었습니다. (0번 li만 blue, 나머지 black)

setState함수를 배열로 저장해두고 onClick 이벤트로 각 li의 번호를 받은 후, 

전체 색상을 black으로 변경 후 click이벤트가 발생한 li의 색상만 blue로 변경하도록 구현하였습니다.

