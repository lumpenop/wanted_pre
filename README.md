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

  페이지 로드 시 animation이 최초 1회 실행되는 것을 방지하고자 

  useEffect를 이용하여 animation-play-state를 paused할 수 있도록 하였습니다.

  #### 구현 시 어려웠던 점

  props값에 따라 animation을 주는 코드 작성 시 css\` \` 형식으로 작성해야되는 것을 몰라 애를 먹었지만

  에러코드를 읽고 계속 시도하면서 알게되었습니다.


### Tab.js
  useState로 state 3개를 설정하여 각각 li의 색상 값을 저장해 두었습니다. (0번 li만 blue, 나머지 black)

  setState함수를 배열로 저장해두고 onClick 이벤트로 각 li의 번호를 받은 후, 

  전체 색상을 black으로 변경 후 click이벤트가 발생한 li의 색상만 blue로 변경하도록 구현하였습니다.

  #### 구현 시 어려웠던 점

  state 값을 하나로 쓰는 방법이 생각나지 않아 3개를 사용하여 구현하였습니다.

  ### ClickToEdit.js
  값을 가지는 state 4개를 선언하여 2개는 input 박스, 2개는 window에서 사용할 수 있도록 하였습니다.

  input에서는 onChange()로 값이 변경될 때마다 state값을 변경될 수 있도록 하였고, 

  onBlur()를 이용하여 focus가 변경되면 window의 state 값을 input 박스의 state 값으로 변경하도록 구현하였습니다.

  #### 구현 시 어려웠던 점

  처음엔 useRef와 event listener를 이용하여 window에 click이벤트 발생 시 ref 값을 비교하여 구현하였다가

  onBlur() 핸들러를 사용하면 더 편하고 코드도 간결해 질 것 같아 변경하였습니다.

### Tag.js
태그 내용을 담을 배열 state와 박스 border 색상과 두께를 담을 state를 생성하여 두고, 

input box에 포커싱이 되었을 경우 바깥 영역 border 색과 두께를 변경니다.

input box에서 엔터로 입력을 완료하면 input box내의 글자를 배열 state에 추가하고 input box value를 초기화 합니다.

x 버튼을 누를 경우 해당 tag가 아닌 것들만 filter로 찾아내어 새로운 배열을 만들어 setTags()로 입력합니다.

#### 구현 시 어려웠던 점
폴더 구조를 나누지 않고 하나의 파일에 작성하다보니 props 전달이 어려워 input box 포커싱 시 바깥 박스 border의 색상을

변경하는 것이 어려웠습니다. 짜여진 코드에서 빠르게 기능을 구현하기 위해 input box의 부모 태그 border를 없애고

새로운 박스로 감싸 포커싱시 border의 색과 굵기가 변경될 수 있도록 하였습니다.
