const express = require('express');

const app = express();

app.get('/test/*', (request, response) => { // '*' 모든값
    // status : 응답코드 (200: 서버문서존재ok, 400:문서x-404: 페이지x)
    response.status(404);
    response.type('text/plain') // mime 타입 변경, 원래는 Content-Type: text/html; 이거였음
    response.set('methodA', 'abcd'); // set(이름,값) , 단순히 응답 헤더에 보여주기위해 적은것임
    // set부분 링크 참고  http://expressjs.com/ko/api.html#app.set
    response.send('임의로 바꾼 설정입니다');
})

// 리다이렉트 (바로가기 개념)
app.get('/redirect', (request, response) => {
    response.redirect('http://naver.com');
})

app.get('/', (request, response) => {
    // npm install -g nodemon 으로 노드몬 설치
    // 현재 폴더에 바로 있다면 nodemon 실행할js파일이름.js 
    response.redirect('http://naver.com');
})

app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});

/* 
    터미널에 node basicServer.js 를 입력하면
    basicServer.js 파일 내부의 app.listen(포트번호, 콜백) 메서드가 실행되는 걸 볼수 있다
    .gitignore 파일을 만들어서 node_modules를 적어주고 (git 올릴때 뺄파일 적는것)
    README.md 파일 만든 후 (1)파일 이름 / (2)파일 셋팅 / (3)컴파일 방법을 적어준다
*/ 
