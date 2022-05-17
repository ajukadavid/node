const fs = require('fs')

//  fs.readFile('readme.txt', 'utf-8', function(error, data){
//     fs.writeFile('write.txt', data, function(error){
//         if (error){
//             console.log(error)
//         }
//     })
// })

// fs.writeFileSync('write.txt', text)

// fs.unlink('write.txt', (err) => {
//     console.log(err)
// })

// fs.mkdir('my-folder', () => {
//     fs.readFile('readme.txt', 'utf-8', (error, data) => {
//         fs.writeFile('./my-folder/writeme.txt', data, () => {

//         })
//     })
// })

fs.unlink('./my-folder/writeme.txt', () => {
    fs.rmdir('my-folder', (error) => {
        console.log(error)
    })
})
