//SIMULADOR DE ARMADO DE PC CON ASISTENTE

alert("Bienvenido a nuestra casa de computacion, por favor Inicie sesion:");

let nombreCliente = "";
let registroExitoso = false;

//LOGGIN

while(registroExitoso != true){
    nombreCliente = prompt("Escriba su nombre");
    if(nombreCliente != ""){
        registroExitoso = true;
        alert("Registro Exitoso");
    }else{
        alert("Debe escribir algo ;)");
    }
}

//Productos

class Componente{
    constructor(tipoComponente, socaloMicro, socaloDisco, socaloRam){
        this.tipoComponente = tipoComponente.toUpperCase();
        this.socaloMicro = socaloMicro;
        this.socaloDisco = socaloDisco;
        this.socaloRam = socaloRam;
    }
}

class Producto{
    constructor(id, marca, modelo, componente, precio, stock){
        this.id = id;
        this.marca = marca.toUpperCase();
        this.modelo = modelo.toUpperCase();
        this.componente = componente;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
        this.cantidadSeleccionados = 0;
    }
}

class Microprocesador{
    constructor(socket, graficaIntegrada){
        this.socket = socket;
        this.graficaIntegrada = graficaIntegrada;
    }
}

class PlacaMadre{
    constructor(socket, tipoRam, cantidadModulosRam, tipoDisco, cantidadDisco, tamaño){
        this.socket = socket;
        this.tipoRam = tipoRam;
        this.cantidadModulosRam = cantidadModulosRam;
        this.tipoDisco = tipoDisco;
        this.cantidadDisco = cantidadDisco;
        this.tamaño = tamaño;
    }
}

class Disco{
    constructor(tipo, conexion, capacidad, tamaño){
        this.tipo = tipo;
        this.conexion = conexion;
        this.capacidad = capacidad;
        this.tamaño = tamaño;
    }
}

class MemoriaRam{
    constructor(tipo, capacidad, frecuencia){
        this.tipo = tipo;
        this.capacidad = capacidad;
        this.frecuencia = frecuencia;
    }
}

class Fuente{
    constructor(tipo, potencia, modular, certificacion){
        this.tipo = tipo;
        this.potencia = potencia;
        this.modular = modular;
        this.certificacion = certificacion;
    }
}

class Gabinete{
    constructor(tamañoMaximo, capacidadDiscosSSD, capacidadDiscosHDD, capacidadCoolers, coolersIncluidos){
        this.tamañoMaximo = tamañoMaximo;
        this.capacidadDiscosSSD = capacidadDiscosSSD;
        this.capacidadDiscosHDD = capacidadDiscosHDD;
        this.capacidadCoolers = capacidadCoolers;
        this.coolersIncluidos = coolersIncluidos;
    }
}

const listaMicros = [];

listaMicros.push(new Producto(1, "AMD", "Ryzen 3 3200G", new Microprocesador("AM4", true), 89000, 5));
listaMicros.push(new Producto(2, "AMD", "Ryzen 5 5600G", new Microprocesador("AM4", true), 126000, 5));
listaMicros.push(new Producto(3, "AMD", "Ryzen 7 5700G", new Microprocesador("AM4", true), 189000, 5));

const listaPlacasMadre = [];

listaPlacasMadre.push(new Producto(1, "MSI", "A320M", new PlacaMadre("AM4", "DDR4", 2, "SATA", 4, "MicroATX"), 49000, 5));
listaPlacasMadre.push(new Producto(2, "Gigabyte", "A520M", new PlacaMadre("AM4", "DDR4", 2, "SATA", 4, "MicroATX"), 63000, 5));
listaPlacasMadre.push(new Producto(3, "Gigabyte", "B550M", new PlacaMadre("AM4", "DDR4", 4, "SATA", 4, "MiniATX"), 89000, 5));

const listaDiscos = [];

listaDiscos.push(new Producto(1, "Kingston", "A400 240GB", new Disco("SSD", "SATA", "240GB", "2.5"), 13000, 5));
listaDiscos.push(new Producto(2, "Kingston", "A400 480GB", new Disco("SSD", "SATA", "480GB", "2.5"), 19000, 5));
listaDiscos.push(new Producto(3, "Kingston", "A400 960GB", new Disco("SSD", "SATA", "480GB", "2.5"), 37000, 5));

const listaMemorias = [];

listaMemorias.push(new Producto(1, "Crucial", "8GB 2666mhz", new MemoriaRam("DDR4", "8GB", "2666mhz"), 15000, 5));
listaMemorias.push(new Producto(2, "Kingston", "Fury Beast 8GB 3200mhz", new MemoriaRam("DDR4", "8GB", "3200mhz"), 19000, 5));
listaMemorias.push(new Producto(3, "Hyper X", "Fury RGB 16GB 3200mhz", new MemoriaRam("DDR4", "16GB", "3200mhz"), 33000, 5));

const listaFuentes = [];

listaFuentes.push(new Producto(1, "Gigabyte", "650W", new Fuente("ATX", "650W", false, "bronze"), 35000, 5));
listaFuentes.push(new Producto(2, "Gigabyte", "750W", new Fuente("ATX", "750W", false, "bronze"), 48000, 5));
listaFuentes.push(new Producto(3, "Gigabyte", "850W", new Fuente("ATX", "850W", false, "bronze"), 56000, 5));

const listaGabinetes = [];

listaGabinetes.push(new Producto(1, "Performance", "ATX", new Gabinete("ATX", 1, 2, 1, 0), 31000, 5));
listaGabinetes.push(new Producto(2, "Gamemax", "Nova N5", new Gabinete("ATX", 2, 2, 4, 1), 37000, 5));
listaGabinetes.push(new Producto(3, "Thermaltake", "N200", new Gabinete("ATX", 2, 3, 6, 3), 58000, 5));


//ARMADO DE PC

let finalizar = false;
let eleccionComponente;
let sumaTotal = 0;
let precioEleccion;

const carrito = [];


//Verifico la eleccion del usuario
function verificarEleccion(cantidadProductos, eleccion){
    let correccion = false;
    let opcionCorrejida;
    while(correccion == false){
        if(eleccion > cantidadProductos || eleccion < 1){
            alert("Opcion invalida, elija una nueva opcion por favor");
            opcionCorrejida = 0;
        }else{
            correccion = true;
            opcionCorrejida = eleccion;
        }
        return opcionCorrejida;
    }
}


function añadirAlCarrito(eleccion, producto){
    if(eleccion != 0){
        carrito.push(producto)
        alert("Producto Agregado con Exito!");
    }
}

function imprimirCarrito(carrito){
    let resultado = "";

    for(const producto of carrito){
        resultado += producto.marca + " " + producto.modelo + " " + " Precio: $" + producto.precio + "\n";
    }

    return resultado;
}

function imprimirLista(lista){ //Lista de Items 
    let resultado = "";

    for(const producto of lista){
        resultado += producto.marca + " " + producto.modelo + " " + " Precio: $" + producto.precio + " Opcion: " + producto.id + "\n";
    }

    return resultado;
}

function calcularTotal(carrito){
    let total = 0;

    for(const producto of carrito){
        total += producto.precio;
    }

    return total;
}


//PROGRAMA

alert("Se abrira el menu para que empiece su compra");
alert("Recuerde elegir usando los numeros indicados segun el producto");

do{

    let eleccionProducto = Number(prompt("Elija el producto que desea agregar al carrito:" + "\n"
    + "Microprocesadores: 1" + "\n"
    + "Placas Madre: 2" + "\n"
    + "Discos SSD: 3" + "\n"
    + "Memorias RAM: 4" + "\n"
    + "Fuentes: 5" + "\n"
    + "Gabinete: 6" + "\n"
    + "Finalizar Compra: 0"));

    let opcionElejida;
    let imprimir = "";

    switch(eleccionProducto){
        case 1:
            imprimir = imprimirLista(listaMicros);
            eleccionComponente = Number(prompt("Elija un Componente:" + "\n" + imprimir));

            opcionElejida = verificarEleccion(listaMicros.length, eleccionComponente);
            añadirAlCarrito(opcionElejida, listaMicros[eleccionComponente-1]);

            break;
        case 2:
            imprimir = imprimirLista(listaPlacasMadre);
            eleccionComponente = Number(prompt("Elija un Componente:" + "\n" + imprimir));

            opcionElejida = verificarEleccion(listaPlacasMadre.length, eleccionComponente);
            añadirAlCarrito(opcionElejida, listaPlacasMadre[eleccionComponente-1]);

            break;
        case 3:
            imprimir = imprimirLista(listaDiscos);
            eleccionComponente = Number(prompt("Elija un Componente:" + "\n" + imprimir));

            opcionElejida = verificarEleccion(listaDiscos.length, eleccionComponente);
            añadirAlCarrito(opcionElejida, listaDiscos[eleccionComponente-1]);

            break;
        case 4:
            imprimir = imprimirLista(listaMemorias);
            eleccionComponente = Number(prompt("Elija un Componente:" + "\n" + imprimir));

            opcionElejida = verificarEleccion(listaMemorias.length, eleccionComponente);
            añadirAlCarrito(opcionElejida, listaMemorias[eleccionComponente-1]);

            break;
        case 5:
            imprimir = imprimirLista(listaFuentes);
            eleccionComponente = Number(prompt("Elija un Componente:" + "\n" + imprimir));

            opcionElejida = verificarEleccion(listaFuentes.length, eleccionComponente);
            añadirAlCarrito(opcionElejida, listaFuentes[eleccionComponente-1]);

            break;
        case 6:
            imprimir = imprimirLista(listaGabinetes);
            eleccionComponente = Number(prompt("Elija un Componente:" + "\n" + imprimir));

            opcionElejida = verificarEleccion(listaGabinetes.length, eleccionComponente);
            añadirAlCarrito(opcionElejida, listaGabinetes[eleccionComponente-1]);

            break;
        case 0:
            let descripcionCarrito = imprimirCarrito(carrito);
            sumaTotal = calcularTotal(carrito);

            alert("Tu Pedido: \n" + descripcionCarrito + "Total: $" + sumaTotal);
            alert("Gracias por comprar aqui :)");

            finalizar = true;
    }

}while(finalizar == false);
