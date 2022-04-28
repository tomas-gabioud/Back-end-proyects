const fs = require('fs');


class contenedor{
    constructor(file){
        this.file=file
    }
    save(producto, file){
        // creo una variable guardando una funcion.
        let proximoId = this.obtenerId(file);
        //le asigno una id al parametro de la funcion save.
        producto.id = proximoId
        // uso la funcion read para leer los productos dentro del array.
        const productosArray = this.read(file);
        //pusheo/envio los nuevos productos.
        productosArray.push(producto);
        //sobreescribo los archivos.
        this.write(productosArray, file);
    }
    obtenerId(file){
        //se pasa 0 a la variable y se lee el archivo en caso de que el
        //productoArray sea mayor  a 0  se cumple la condicion
        let ultimoId = 0
        let productosArray = this.read(file);
        if(productosArray.length > 0){
            //esta condicion no entiendo bien que es lo que hace.
        ultimoId = productosArray[productosArray.length - 1].id;
        } // devuelve el id + 1 para que no se repita.
        return ultimoId + 1
    }
    read(file){
        // se crea la variable con un array vacio.
        let productosArray = [];
        try{
            // se asigna a la variable la lectura de forma asincronica el archivo.txt 
            productosArray = fs.readFileSync(file, 'utf-8');
            //si la variable es mayor a 0 se convierte en formato json los datos de la variable, sino la variable sigue vacia, hasta encontrar un dato.
            productosArray.length > 0 ? productosArray = JSON.parse(productosArray) : productosArray = [];
        }catch(err){
            console.log('error al leer el archivo',err)
        }// si la variable es mayor a 0 retorna el resultado pedido es decir la lectura del archivo.
        return productosArray;
    }
    // funcion asincrona ya que usamos el async await 
    async write(productosArray, file) {
        // dentro de la variable declarada se convierte el valor en formato string o cadena de texto.
        let json = JSON.stringify(productosArray);
        try {// de forma sincronica creamos un nuevo archivo en caso de que este no exista, en caso de que exista se modifican los datos.
            await fs.writeFileSync(file, json);
        } catch (err) {
            console.log('Error en la escritura', err);
        }
    }
        
        getById(id, file) {
            //se declara la variable y se le asigna una funcion y al llamar por this esta funcion es global
            //es decir estamos llamando a la funcion read en este caso.
            let productosArray = this.read(file);
            //despues de leer el archivo buscamos por id el producto que queremos.
            let producto = productosArray.find(producto => producto.id == id);
            //si encuentra ese producto por su ID lo devuelve sino lo encuentra devuelve nulo
            return producto ? producto : null;
        }
            
    getAll(file) {
        //leemos los archivos llamando la funcion read de forma global a traves del this.
        let productosArray = this.read(file);
        // devuelve todos los productos.
        return productosArray;
    }
        deleteById(id, file) {
            //leemos la variable con la funcion read
            let productosArray = this.read(file);
            //creamos una variable y dentro creamos una funcion la cual va a buscar al producto por ID
            let index = productosArray.findIndex(producto => producto.id == id);
            //si el id es mayor igual a 0 
            if (index >= 0) {
                //productos array a la variable index le elimina la posicion 1 del indice
                productosArray.splice(index, 1);
                // dentro de la variable convierte en cadena de texto.
                let json = JSON.stringify(productosArray);
                try {
                    //escribe los datos de forma sincronica 
                    fs.writeFileSync(file, json);
                    return id
                }
                catch (err) {
                    console.log('Error en la escritura', err);
                }
            }
        }
        
        deleteAll(file) {
            //se crea variable con un array vacio.
            let productosArray = [];
            //se pasa a cadena de texto.
            let json = JSON.stringify(productosArray);
            try {
                // se sobreescribe con el array vacio.
                fs.writeFileSync(file, json);
            }
            catch (err) {
                console.log('Error en la escritura', err);
            }
        }
    
        async createFile(file_path) {
            try {
                // verifico si el archivo ya existe. Si no existe lo creo,
                // si existe decido no hacer nada, pero podria implementar otra logica.
                if (fs.existsSync(file_path)) {
                    console.log('El archivo ya existe, entonces no hago nada');
                    return false
                } else {
                    console.log('El archivo no existe, entonces lo creo!');
                    await fs.promises.writeFile(file_path, '', 'utf8');
                    return true
                }
            } catch (err) {
                console.log('Error en la creación del archivo', err);
                return false;
            }
        }
}

module.exports = contenedor;