const { response } = require('express');
const express = require('express');

const app = express();

app.get('/', function(request,response) {
    response.send('router');
})

// 파람값으로 들고옴
app.get('/page/:id', function(request,response) { //라우터 param을 이용할예정(:id)
    const id = request.params.id;
    response.send(`<h1>${id} page </h1>`);
    /* 
    윗 두줄 한줄로하면 이렇게됨
    response.send(`<h1>${request.params.id} page </h1>`); //변수값을 가져오기 위해 백틱사용, 주소를 request로 받아왔기 때문에 request.param.id로 접근해야한다
    */
})

//쿼리값으로 들고옴
app.get('/user', function(request,response) { 
    const user = request.query.user;
    response.send(`<h1>${user} page </h1>`);
})  
//http://127.0.0.1:52273/user?user=dddd
// 주소에   /user?user=dddd   입력해야 확인 가능
// ?물음표로 쿼리라는것을 알려줌


//? get 실습
// 1) 주소 /user/:id 를 이용하여 화면에 id값 출력
app.get('/user/:id', function(request, response){
    const id = request.params.id;
    response.send(`<h2>${id} id 이용해서 page </h2>`)
})
//http://127.0.0.1:52273/user/1

// 2) 주소 /board 에 쿼리를 이용하여 화면에 id값 출력
app.get('/board', function(request, response){
    const id = request.query.id;
    response.send(`<h2>${id} board 쿼리 이용 </h2>`)
})
//http://127.0.0.1:52273/board?id=111 



// post : 형식은 값을 전달할 때 사용하게된다 -> body (body-parser)
app.post('/user', function(request,response) {
    console.log('post에 접근했습니다'); //포스트에 접근이 가능한지 확인
    response.send('post 하였습니다');
})

// put : 수정
app.put('/user', function(request,response) {
    console.log('put으로 접근했습니다');
    response.send('put 하였습니다')
})

// delete : 삭제
app.delete('/user', function(request,response) {
    console.log('delete으로 접근했습니다');
    response.send('delete 하였습니다')
})

app.listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
})