# Dreamcoding Ellie

## 01 : callback 함수, 콜백지옥 함수 만들기
- Javascript is synchronous(동기적) : 호이스팅이 된 이후부터 코드가 작성한 순서대로 실행된다. 
- hoisting : var 변수, function 선언이 자동으로 제일 위로 올라가는 것

### 특징
1. 나중에 다시 호출해줘
2. 인자로 넘김
3. 화살표함수 많이 사용

### 종류
1. Synchronous callback : 콜백함수를 전달받아서 바로 호출

2. Asynchronous callback

ex) 비동기적 실행 setTimeout()함수 이용 
: 지정된 시간 이후에 콜백함수를 호출하는 함수(콜백함수 전달할 수 있다)

### Callback 지옥 예제 ( 두 가지 API )
1. loginUser : id와 password를 받아오고, 정상로그인일 경우 onSuccess 콜백함수 호출, 비정상일 경우 onError 콜백함수 호출
2. getRoles : 사용자의 정보를 받아서 사용자가 가지고 있는 역할을 요청하여 받아오는 api

### 콜백 지옥 단점 -> 해결을 위하여 async, promise 이용
1. 문제 분석 어려움
2. 유지 보수 어려움

## 02 : promise : callback을 대신해서 깔끔하게, 비동기를 간편하게 처리할 수 있도록 도와주는 Object

### ex) 비동기 통신 결과 (네트워크 통신, 파일 입출력) 
- 상태 (pending, fulfilled, rejected)
  - 진행 중 : pending
  - 완료 : fulfilled or rejected
    - 성공하였을 때, then()
    - 실패하였을 때, catch()
- Producer(정보를 제공하는)와 Consumer(정보를 소비하는)의 차이
  - Producer
    - Promise 객체가 생성이 되면, executor 함수가 바로 동작한다. 
    - executor : (resolve, reject) callback 함수 만들기
  - Consumer : then, catch, finally 함수를 이용하여 받아올 수 있다.
    -then() : Promise가 잘 실행되어서 resolve 콜백함수를 통해서
    -catch() : Promise에서 reject 콜백함수를 통해서