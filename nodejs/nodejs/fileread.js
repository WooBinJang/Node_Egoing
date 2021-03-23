var fs = require('fs'); // node.js 에 있는 모듈 사용

fs.readFile('sample.txt','utf8', function (err, data) {
  console.log(data);
});
// 파일 읽기 모듈
