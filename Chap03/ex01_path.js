var path = require('path')

console.log(__dirname) // 현재 디렉토리 전체 경로
console.log(__filename) // 현재 파일 전체 경로

// path  모듈 메소드(전체 경로에서 필요한 부분만 추출)
console.log(path.dirname(__filename)) // 디렉토리 경로
console.log(path.extname(__filename)) // 파일 확장자
console.log(path.basename(__filename)) // 파일 이름
console.log(path.parse(__filename)) // 객체로 변환

// 경로 생성
var newPath = path.format({
    root: 'C:\\',
  dir: 'C:\\Users\\s1901\\Desktop\\nojam\\Chap03',
  base: 'ex04_path.js',
  ext: '.js',
  name: 'ex04_path'
})
console.log('newPath', newPath)

// path.join() : 인자를 조합하여 경로 string 생성
var createPath = path.join(__dirname, path.sep, '..', 'Chap02', paht.sep, 'index.html')