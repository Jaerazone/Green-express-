const express = require('express');

const app = express();

app.get('/',(request, response) => {
    //response.sendFile(__dirname + '/public/정적파일.html');
    response.sendFile(__dirname + '/public/login.html');
    // 정적파일을 들고오는 방법 (2), (1) app.use(express.static('public'));
})
//res.sendFile(경로 [, 옵션] [, fn])
// __dirname 절대경로임(현재실행중인 파일root?라고 보면될듯). 상대경로로 부르면 파일 못불러와서 에러날수도있어서

app.get('/nickname',(request, response) => {
    const nickname = request.query.nickname;
    response.send(`${nickname}님 환영합니다`);
})


app.listen(8080, () => {
    console.log('Server running at http://127.0.0.1:8080');
});

/* 
    터미널에 node basicServer.js 를 입력하면
    basicServer.js 파일 내부의 app.listen(포트번호, 콜백) 메서드가 실행되는 걸 볼수 있다
    .gitignore 파일을 만들어서 node_modules를 적어주고 (git 올릴때 뺄파일 적는것)
    README.md 파일 만든 후 (1)파일 이름 / (2)파일 셋팅 / (3)컴파일 방법을 적어준다
*/ 
