//fs module

const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./folder/first.txt','utf8');
const second = readFileSync('./folder/second.txt','utf8');

console.log(first)
console.log(second)


writeFileSync(
    './folder/result-sync.txt',
    `here is the result: ${first}, ${second}`,
    {flag: 'a'}//appends
    )
