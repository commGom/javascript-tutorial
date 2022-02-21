'use strict';

// 1. Producer
const promise = new Promise((resolve, rejcet) => {
  //doing some heavy work ex) 네트워크 통신, 파일 입출력
  console.log('doing somthing....');
  setTimeout(() => {
    // resolve('commGom');
    rejcet(new Error('The Error reason is no Network!!!'));
  }, 2000);
});

// 2. Consumer : then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('Finally Executing');
  })

// 3. Promise Chaining
const fetchNumber = new Promise((resolve, rejcet) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, rejcet) => {
      setTimeout(() => {
        resolve(num - 1);
      }, 1000);
    })
  })
  .then(num => console.log(num));

// 4. Error Handling
const getHen = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`🐓`)
    }, 1000);
  })
};
const getEgg = (hen) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(`${hen}=>🥚`)
      reject(new Error(`error! ${hen}=>🥚`));
    }, 1000);
  })
};
const cook = (egg) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${egg}=>🍳`)
    }, 1000);
  })
};

getHen()
  .then(hen => getEgg(hen))
  .catch(error => {
    return "🥖";
  })
  .then(egg => cook(egg))
  .then(meal => console.log(meal))
  .catch(console.log);