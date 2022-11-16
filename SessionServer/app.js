
// localhost:9000/

const SERVER_PORT=9000;

const express = require("express");         // express 모듈 요청
const ejs = require("ejs");                 // ejs 모듈 요청
const bodyParser= require("body-parser");   // body-parser 요청
const app = express();                      // app을 express 프레임워크로 킨다.


app.set("view engine", "ejs");                          // ejs를 사용하겠다.
app.use(bodyParser.urlencoded({extended : false}));     // urlencoded
app.use(bodyParser.json());                             // json 타입으로 파싱하게 설정
app.use(express.static(__dirname + '/'));               // views 폴더 경로는 프로젝트 폴더

app.get("/", function (req, res) {
    res.render("MainPage", {});
})

// 동적 페이지
app.get("hello:/num", function (req, res) {
    res.render("test2", { num: req.params.num }); //페이지로 파라미터 넘겨줌
})


app.get("/About", function (req, res) { 
    res.render("About",{});
})

app.get("/Regist", function (req, res) { 
    res.render("RegistPage",{});
})

app.get("/SendRegist", function (req, res) { 
    console.log("안녕 테스트 페이지 !");
    res.render("RegistPage",{});
})


app.listen(SERVER_PORT, function () {
    console.log("실행중...")
})
