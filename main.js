const http = require('http')
const express = require('express')

const mensaje = ()=>{
    const hora = new Date().getHours()
    if(hora>=6 && hora <=12){
        return 'buenos dias'
    }else if (hora>=13 && hora <=19){
        return'buenas tardes'
    }else{
        return 'buenas noches'
    }
}


//Creando server con nodemon
// const app = http.createServer((req,res)=>{
//     res.end(mensaje());
// })
// const PORT =8080
// app.listen(8080)
// console.log(`servidor Http Escuchando en el puerto${PORT}`)

// server con express
const app = express()
const PORT =8080
app.listen(8080)
console.log(`servidor Http Escuchando en el puerto${PORT}`)
app.get('/',(req,res)=>{
    res.send('hola tomas')
})
let visitas = 0;
app.get("/visitas", (req,res)=>{
    res.send(`La cantidad de visitas es ${++visitas}`)
})
app.get('/info',(req,res)=>{
    res.send('hola tomas aca esta la informacion')
})