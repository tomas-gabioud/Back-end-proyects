const Container = require('./contenedor');

const productos = new Container();
const file = './products.txt';
const productsArray = [
    {
        titulo: 'Pantalon adidas',
        precio: 284.77,
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
    },
    {
        titulo: 'Buzo Nike',
        precio: 527.88,
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
    },
    {
        titulo: 'Gorro Nike',
        precio: 193.99,
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
    }
]
//se crea una funcion la cual muestra el inicio de la app, luego crea un archivo en file(./products.txt)
//hace 4 condicionales guardando productos, trayendolos, buscandolos por su id, y borrandolos por su id, y despues una funcion para finalizar la app.
function onInit() {
    console.log('Inicio de la app 📲');
    const fileCreated = productos.createFile(file);
    fileCreated ? saveAllProducts() : console.log('No se pudo guardar productos');
    fileCreated ? getAllProducts() : console.log('No se pudo leer productos');
    // Pongo null en el false porque no quiero hacer nada. Hay otras formas de hacerlo.
    const productFound = fileCreated ? findOneById(1) : null;
    productFound ? deleteProduct(1) : null;
    finishApp();
}

function saveAllProducts() {
    productsArray.map(product => {
        productos.save(product, file);
    });
}

function getAllProducts() {
    const allProductsArray = productos.read(file);
    console.log('Productos: ', allProductsArray);
}

function findOneById(id) {
    const product = productos.getById(id, file);
    product ? console.log('Producto encontrado: ', product) : console.log('Producto no encontrado');
    return product ? true : false;
}

function deleteProduct(id) {
    const productDeleted = productos.deleteById(id, file);
    console.log('Producto eliminado ID: ', productDeleted);
}

function finishApp() {
    productos.deleteAll(file);
    console.log('Fin de la app 💻💣❗');
}

onInit();

