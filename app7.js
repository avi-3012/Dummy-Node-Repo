//fs module (async)

const {readFile,writeFile} = require('fs');

readFile('./folder/first.txt','utf8',(err,result)=>{
     if(err){
        console.log(err)
        return 0;
     }
     const first = result;
     console.log(first)
     readFile('./folder/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return 0;
         }
         const second = result; 
         console.log(second)
         writeFile('./folder/result-async.txt',`here is the result: ${first}, ${second}`,(err,result)=>{
            if (err){
                console.log(err)
                return;
            }
            console.log(result)
         })
     })
})