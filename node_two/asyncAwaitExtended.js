const fsCallbacks = require('fs');
const fsPromises = require('fs').promises;

// fsCallbacks.readFile('./text.txt', 'utf-8', (err, data) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data);
//     }
// })
const asyncFunction = async () => {
    console.log(2)
    console.log(3)
    const data = await fsPromises.readFile('./text.txt', 'utf-8')    
    console.log(4)
    console.log(5)
    console.log(6)
}

console.log(1);

asyncFunction();

console.log(7)


