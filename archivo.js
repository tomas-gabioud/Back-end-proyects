const { error } = require('console')
const fs = require ('fs')



try{
    let horaActual = new Date()
    fs.writeFileSync('./fyh.txt', `${horaActual}`)
    const data = fs.readFileSync('./fyh.txt','utf-8')
    console.log(data)
}catch(err){
    console.log(err)
}