const { clear } = require('console');
const fs = require('fs');


class container {
    constructor(file,libros) {
        this.file = file
    }
    save(obj, prop ) {
        const params = obj[prop];
        const guardar = fs.appendFileSync(`this.file, ${obj}`);
        return obj.id
    }
    getById(obj){
        if (obj.id == obj.id){
        return obj
        }else(err)
            console.log(err);
    }
    async getAll(){
        try {
            const arrayObj = await fs.promises.readFile(this.file,'utf-8')
            return JSON.parse(arrayObj)
        } catch (error) {
            console.log('error',error)
        }
    }
    deleteById(n){
        return n.clear(n)
    }
    async deleteAll(){
        try{
            const borrar = await fs.promises.unlink('this.file',err);
            return borrar
            }
            catch(error){
                console.log('Hubo un error al borrar el archivo',error);
        }
    }
}




let primerContainer = new container('./producto.txt');


