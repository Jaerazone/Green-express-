const express = require('express');

const app = express();

app.use(express.static('public'));
 // 정적파일을 들고오는 방법 (1), (2) sendFile(__dirname+'/public/login.html'); 로 들고오는방법 2
// 주소에 public 폴더를 쓰면 그안의 파일들을 들고올수 있다
// 8080/정적파일.html 적으면 세부로들어가짐

app.get('/', (request, response) => {
    // 파일링크와 사진이미지,
    // 그리고 오디오 파일과 비디오파일도 넣을수 있다
    // 파일, 이미지, pdf 파일은 그걸 바로 오픈하고, zip은 다운로드됨
    // 다양한 파일을 public폴더에 넣어서 확인하기
    const template = 
    `
        <h1>Hello express</h1>
        <a href="/정적파일.html">파일입니다</a>
        <a href="white-flower.jpg">파일입니다</a>
        <a href="단축키.pdf">파일입니다</a>
        <a href="teeto-master.zip">파일입니다</a>
    `;
    response.send(template);
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