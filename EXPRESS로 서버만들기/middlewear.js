//미들웨어를 확인하기 위한 서버
const express = require('express');
// (morgan-1) morgan 모듈 가져오기 : 클라이언트의 접속현황을 로그로 출력
const morgan = require('morgan');
// (cookieParser-1) cookie-parser모듈 들고오기 : 쿠키를 가져오거나 생성 후 보낼 수 있다
const cookieParser = require('cookie-parser')
// (body-parser -1) body-parser모듈 들고오기 : request의 body의 값을 가져올 수 있다.
const bodyParser = require('body-parser');
const { response } = require('express');

const app = express();

// (morgan-2) app.use를 통해 morgan 미들웨어 사용
app.use(morgan('combined'));
// (cookieParser-2) app.use를 통해 cookieParser 미들웨어사용
app.use(cookieParser());
// (body-parser-2) app.use를 통해 bodyParser 미들웨어사용
// url 인코드?를 확장하지 않는다!
// MIME type 에 대해서 앞전에 얘기했었는데 
// 그 중에서 application/x-xxx-form-urlencoded 타입 파싱(이건 form 타입을 가져온다 라는 뜻)
// postman에서 body 택에 none, form-data, x-www-form-urlencoded...등 있음
app.use(bodyParser.urlencoded({extended:false}));
// application/json 타입도 파싱해올수 있도록 해본다(아래)
app.use(bodyParser.json()) // 이렇게하면 cookie때와 같은방법으로 request로 내용을 받아올수있다

app.get('/', (request, response) => {
    // (cookieParser-3) cookieParser 를 이용하면 request에 있는 cookies를 가져올수있다
    console.log('Cookies : ', request.cookies);
    const template =
    `
    <form method="post" action="/post">
        <p>이름을 작성해주세요</p>
        <input type="text" name="name">
        <input type="submit" value="전송">
    </form>
    `;
    response.send(template);
    // name = green,blue의 그 name

    // 여기서 method=post를 하면 현재/주소에다가 /post를 보내기때문에
    // 아래 동일한 경로/post가 있어서 찾지 못하게된다
    // 그래서 아래 경로를 잠시 지워준다
    // 안지우고싶으면 action="/post" 를 적어준다
    // http://www.tcpschool.com/html-tag-attrs/form-method
    /*
        form에 작성되는 method 는 전달 방식을 의미합니다
        그래서 Get을 사용하면 정보를 전달할때 쿼리로 전달한다는 의미고
        Post를 사용하며 정보를 전달할때 body로 전달한다는 의미가 됩니다 
        그래서 method  Post 를 사용해 주었고 
        action을 통해서 이동할 주소를 알려주게됩니다
        action을 적지않으면 현재 주소로 post를 보내게 됩니다
    */
})

//(실습 문제) 
// nickname을 전달받은 /name url을 가진 Get과 Post를 작성하세요
// Get은 nickname을 입력받음
// Post는 bodyParser를 이용하여 출력
app.get('/name', (request, response) => {
    const template =
    `
    <form method="post" action="/name">
        <p>닉네임을 입력해주세요</p>
        <input type="text" name="nickname">
        <input type="submit" value="전송">
    </form>
    `;
    response.send(template);
})

app.post('/name', (request, response) => {
    const nickname = request.body.nickname;
    response.send(`<h1>${nickname} 님 환영합니다 </h1>`)
})
// 실습문제끝

// (cookieParser-4)
app.get('/get', (request, response) => {
    //쿠키전달  response.cookie(name, value, option) 이름,값, 옵션 전달
    response.cookie('cookiename', '쿠키값', {httpOnly : true, maxAge : 36000})
    response.send('쿠키를 보냄');  // send 안하면 무한루프남
})

// (morgan-3) 포스트맨을 통해서 POST 메소드 실행확인
app.post('/a', (request, response) => {
    response.send('<h1>post</h1>')
})

// (body-parser-3) bodyParser 통해서 body 값 가져오기 
app.post('/post', (request, response) => {
    const name = request.body.name;
    response.send(`<h1>${name} post </h1>`)
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
/*
    morgan : 서버 로그인 아웃 보여주는 미들웨이인듯
    cookieParser : 웹에 저장되어있는 정보 보여주는 미들웨어인듯
*/