
const final = () => console.log('termine');
const mostrarLetras = (text, cb )=> {
    for (let i = 0; i <= text.length; i++){
        const letra = text[i];
        setTimeout(()=> console.log(letra), 1000 * i)
    }
    setTimeout(() => cb(), 1000 * text.length)
}

mostrarLetras('Tomas', final());