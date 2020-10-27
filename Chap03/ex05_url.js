// url은 두 가지 형태로 제공됨

const urlString = "https://user:pass@sub.example.com:8080/p/a/t/h?query=string1&query=string2&query=string3#hash"

//#region 1. wHATWG 방식(full url만 가능)
// url 파싱
// var myURL = new URL(urlString)
// console.log(myURL)

// // searchParams 추출 가능

// console.log(myURL.searchParams)
// console.log(myURL.searchParams.get('query'))
// console.log(myURL.searchParams.has('query'))
// console.log(myURL.searchParams.getAll('query'))
// console.log(myURL.searchParams.keys())
// console.log(myURL.searchParams.values())

//#endregion

//#region 2. Node.js 레거시 API(부문 url도 가능)
var url = require('url')

// url 파싱
var myURL = url.parse(urlString);
//console.log(myURL)

//qeurystring 모듈 사용
// const querystring = require('querystring')
// const query = querystring.parse(myURL.query)
// console.log(query)
// console.log(querystring.stringify(query))

// var parseUrl = new URL('/?num1=100&num2=200')
// console.log(parseUrl)

//단축 URL 처리(레거시 방식만 가능)
var parseUrl = url.parse('/?num1=100&num2=200')
console.log(parseUrl)


//#endregion