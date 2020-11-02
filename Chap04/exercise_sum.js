var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');




//#region 1. get 방식으로 넘어온 두 값(start, end)을 활용하여 두 값 사이의 합계 구하기
// var server = http.createServer(function(req, res){
//     console.log('req.url: ', req.url)

//     // 파비콘 요청 무시하기
//     if(req.url === '/favicon.ico'){
//         res.end();
//         return;
//     }

//     // 1. url 파싱
//     const parsdedURL = url.parse(req.url);
//     console.log('파싱된 url: ', parsdedURL);

//     // 2. 파싱된 url에서 querystring 추출 및 객체로 저장
//     console.log('parsdedURL.query: ', parsdedURL.query);  // num1=1&num2=100
//     qs = querystring.parse(parsdedURL.query);   
//     console.log('파싱된 querystring: ', qs);  //  { num1: '1', num2: '100' }

//     // 3. 변수 num1, num2에 querystring의 num1, num2값을 정수로 변환하여 저장
//     var num1 = parseInt(qs.num1);
//     var num2 = parseInt(qs.num2);
//     console.log(`num1=${num1}, num2=${num2}`);

//     // 4. num1, num2의 값 체크(합계 구하기 또는 에러 발생 알림)
//     res.setHeader('Content-Type', 'text/html; charset=utf-8');
//     if(Number.isNaN(num1) || Number.isNaN(num2)){
//         res.end('잘못된 숫자가 입력되어 에러가 발생함.')
//     }else{
//         var sum = 0;
//         for(var i=num1; i<=num2; i++)
//             sum += i;
//         res.end(`${num1} ~ ${num2}의 합계: ${sum}`);
//     }
// }).listen(8080, ()=>console.log('8080 포트에서 대기중'))
//#endregion

//#region 2. post 방식으로 넘어온 두 값(start, end)을 활용하여 두 값 사이의 합계 구하기
var fs = require('fs');

var server = http.createServer((req, res)=>{
    if(req.method.toLowerCase() === 'post'){
        var body='';
        req.on('data', (chunk)=>{
            body+=chunk;
        });
        req.on('end', ()=>{
            var data = querystring.parse(body); // num1=1&num2=100 => {'num1':1, 'num2':2}
            var num1 = parseInt(data.num1);
            var num2 = parseInt(data.num2);

            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            if(Number.isNaN(num1) || Number.isNaN(num2)){
                res.end('잘못된 숫자가 입력되어 에러가 발생함.')
            }else{
                var sum = 0;
                for(var i=num1; i<=num2; i++)
                    sum += i;
                res.end(`${num1} ~ ${num2}의 합계: ${sum}`);
            }
        })
    }else{
        if(req.url === '/'){
            fs.readFile('./sum.html', (err, data)=>{
                res.end(data);
                return;
            })
        }
    }
}).listen(8080, ()=>console.log('8080 포트에서 대기중'))
//#endregion