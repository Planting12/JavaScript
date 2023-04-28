function sayHello() {
  return new Promise((resolve, reject) => {
    resolve("hello!!!");
    // reject(new Error());
  });
}

// sayHello()
//   .then((resolveData) => {
//     console.log(resolvedData);
//     return resolvedData;
//   })
//   .then((resolvedData) => {
//     console.log(resolvedData);
//   })
//   .then((resolvedData) => {
//     console.log(resolvedData);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 내가 익숙한 기존의 문법으로 사용 가능
async function test() {
  const hello1 = await sayHello();
  console.log(hello1);
}

test();
