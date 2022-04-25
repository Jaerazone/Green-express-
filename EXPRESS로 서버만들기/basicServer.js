//node_modules에 있는 express 관련 파일을 가져와 사용해서 서버 생성
const express = require('express');

//서버 생성
// express(); 는 함수(생성자) 이므로, 반환값을 변수app객체에 저장한다
/* 
    서버의 기능을 가진 객체 생성
    : 포트를 열어서 외부에서 접근(=요청) 가능하게함
    : 요청이 왔을때 함수를 실행하도록함 > 화면출력, 기능실행과 같은 느낌
*/
const app = express();

//request 이벤트 리스너 설정
//request와 response을 받았을때 생성하도록함
// https://expressjs.com/ko/guide/using-middleware.html
// 미들웨어 사용
// 요청 오브젝트(req), 응답오브젝트(res)
app.use((request, response) => {
    //화면에 아래의 html<h1> 태그를 출력해준다
    response.send('<h1>Hello express</h1>')
})




// 내가적은 (8080 or 52273) 포트로 서버를 오픈,실행함
// 먼저 포트번호를 지정하고, 포트번호를 통해 외부에서 접근가능하게 한다
app.listen(52273, () => {
    //서버가 열리자마자 실행되는 console.log()내용 
    //(서버가 실행되는지 안되는지 알수없어서 확인차 콘솔로 찍어본다)
    console.log('Server running at http://127.0.0.1:52273');
});

/* 
    터미널에 node basicServer.js 를 입력하면
    basicServer.js 파일 내부의 app.listen(포트번호, 콜백) 메서드가 실행되는 걸 볼수 있다
    .gitignore 파일을 만들어서 node_modules를 적어주고 (git 올릴때 뺄파일 적는것)
    README.md 파일 만든 후 (1)파일 이름 / (2)파일 셋팅 / (3)컴파일 방법을 적어준다
*/ 