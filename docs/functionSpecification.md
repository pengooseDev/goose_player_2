## 기능명세서

- [x] Redux 환경설정
- [x] styled-components 환경 설정
- [x] Provider을 모아둔 컴포넌트 분리 및 Provider 의존성 주입

- [x] Theme Toggle
  - [x] styled.d.ts 선언
  - [x] Globalstyle 생성 & theme 생성
  - [x] Theme Toggle Btn 생성
  - [x] 변경 Motion 구현

### Route

- `/` : 로그인 여부를 확인한다.
- [ ] 로그인이 되어있다면 홈페이지를
- [ ] 그렇지 않다면 계정 생성 / 로그인 페이지로 이동.
- `/create-account` : 계정을 생성한다.
- [ ] React-hook-form을 이용해 정해진 API로 POST요청을 보낸다.
- [ ] 유효성 검사를 진행한다.
- +a : 유효성 검사에 통과하지 못할 경우, 문제가 있는 부분을 붉은 색으로 표시하고 Error 메시지를 박스 옆에 렌더링한다.
- `/log-in` : 로그인을 진행하는 페이지입니다.
- [ ] React-hook-form을 이용해 정해진 API로 POST요청을 보낸다.
- `/tweet/[id]` : 트윗의 상세 정보를 보는 페이지로 detail 데이터를 렌더링 한다.

### /

- [ ] 데이터베이스에 존재하는 모든 트윗을 렌더링한다.
  - [ ] 모든 데이터를 렌더링하는 것이 아니라, 무한 스크롤을 이용해 일정 갯수의 데이터만 받아와 re-rendering한다.
    - +a BE로부터 받아온 데이터를 캐싱할 것인가?
      1. 데이터가 워낙 자주 변하니 staleTime 0으로 설정하기.
      2. 캐싱하지 않고 skeleton Loading 적용
         둘 중 고민해보기.
  - [ ] 트윗은 자체적 알고리즘으로 추천한다.
        점수 산출 : createAt(50%) + 댓글(20%) + 좋아요(20%) + random(10%);(추후 follow기능 구현 시, 유저의 활동에 큰 가중치 부여하기)
- [ ] 로그인이 되어있는 유저에 한 해, 트윗, 댓글, 좋아요 기능 허용.

  - [ ] 로그인 되어있지 않은 유저가 댓글을 작성 후, submit할 경우 경고 모달창을 띄운다.

- 검색한 노래는 detail 페이지를 갖는다. tweet이 달릴 경우, DB에 id와 댓글 데이터를 저장한다.

### /tweet/[id]

- 사용자는 id에 해당하는 트윗의 내용과 `좋아요` 버튼을 볼 수 있어야 한다.
- `좋아요`버튼을 클릭했 을 경우 좋아요의 상태값이 데이터베이스에 저장되어야 한다. useSWR의 mutate나 react-query의 useMutation, 또는 redux-thunk를 사용하여 업데이트를 반영해야 한다.

### /free-style

- 혼자 음악을 듣는 공간. 로그인 되지 않은 유저도 입장 가능.
  ##### - 로그인 유저
  playList 저장 : DB
  좋아요 기능 : O
  MusicTweet 기능 : O
  ##### - 비로그인
  playlist 저장 : localStorage
  좋아요 기능 : X
  MusicTweet 기능 : X

---

## 추후 추가할 요소들

### /room

- [ ] socket.io를 사용해 stream데이터 공유, 채팅, playlist 데이터 공유
- [ ] 화면공유 기능 추가해도 ok

### follow 기능

- [ ] github 로직 밴치마킹

---

## TroubleShooting

- [ ] styled-components SSR 설정 했는데 CSS 좀 튀는듯
      추후에 확인 다시.
