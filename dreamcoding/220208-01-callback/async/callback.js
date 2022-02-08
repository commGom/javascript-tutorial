'use strict';

//Javascript is synchronous(동기적) : 호이스팅이 된 이후부터 코드가 작성한 순서대로 실행된다. 
// hoisting : var 변수, function 선언이 자동으로 제일 위로 올라가는 것

console.log('1');
setTimeout(function () {
  console.log(2);
}, 1000)  //지정된 시간 이후에 콜백함수를 호출하는 함수(콜백함수 전달할 수 있다.)
console.log('3');


// Synchronous callback : 콜백함수를 전달받아서 바로 호출
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('Hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);

}
printWithDelay(() => {
  console.log('async callback', 2000);
})

// Callback 지옥 예제
// 두가지 API 
// 1. loginUser : id와 password를 받아오고, 정상로그인일 경우 onSuccess 콜백함수 호출, 비정상일 경우 onError 콜백함수 호출
// 2. getRoles : 사용자의 정보를 받아서 사용자가 가지고 있는 역할을 요청하여 받아오는 api
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'commGom' && password === '1234') ||
        (id === 'hyunwoo' && password === '1234')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('Not Found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'commGom') {
        onSuccess({ name: 'commGom', role: 'admin' });
      } else {
        onError(new Error('No Access'));
      }
    }, 10000);
  }
}

const userStorage = new UserStorage();
const id = prompt('Enter your id');
const password = prompt('Enter your password');
userStorage.loginUser(id, password, (user) => {
  userStorage.getRoles(user, (userWithRole) => {
    alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
  }, (error) => {
    console.log(error);
  })
}, (error) => {
  console.log(error);
})