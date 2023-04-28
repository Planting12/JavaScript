const http = require("http");
// require로 해당 패키지(http)를 불러와서 사용하겠다.
// "http" : http를 쉽게 구축할 수 있게 만드는 패키지.

http
  .createServer((req, res) => {
    // .createServer: 서버 구축을 위해 서버 생성
    // req: 클라이언트가 요청 보낼 때의 정보
    // res: 클라이언트에게 응답 보낼 때의 정보
    res.writeHead(200, { "Content-Type": "text/html" });
    // writeHead : 응답을 보낼 때 헤더 값을 통해서 200이라는 상태코드와 타입을 보낸다.
    // 200 : 응답을 잘 보냈을 때의 숫자(정상적이지 않을 때는 404 같은 값이 들어간다)
    // "text/html" : html을 반환해주겠다.
    if (req.url === "/") {
      res.writeHead(200);
      res.end("main url");
    } else if (req.url === "/upload") {
      res.writeHead(200);
      res.end("upload url");
    } else if (req.url === "/delete") {
      res.writeHead(200);
      res.end("delete url");
    } else {
      res.writeHead(404);
      res.end("Not found!");
    }
  })
  .listen(3000, () => {
    // 대기하는 곳
    // 3000 : 포트 번호를 정해준다.
    console.log("3000번 포트 서버 접속 완료!");
  });
