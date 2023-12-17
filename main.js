
/*Creo la clase Libro para instanciar varios objetos libros, objetos que tendrán como propiedades; el titulo, autor, genero, precio, cantidad, etc.*/
class Libro{
    constructor(titulo, autor, genero,precio,cantidad,stock, numSerie, imagen){
        this.titulo =   titulo;
        this.autor  =   autor;
        this.genero =   genero;
        this.precio =   parseFloat(precio);
        this.cantidad = parseFloat(cantidad);
        this.stock  =   stock;
        this.numSerie  =   numSerie;
        this.imagen =   imagen;
    }
}

/*  Se crean instancias de varios objetos tipo Libro, para agregar a las propiedades de los libros su información requerida
    La idea de esto es crear una BD de información para agregarlo en un arreglo, que contendra todos los libros.
    Con la información de este arreglo se mostrara en el FrontEnd del index.html, a través de DOM y se guardara la información
    en el Local Storage.
    */
const nuevoLibro1 = new Libro("El enigma sagrado", "Christian Jacq", "Misterio histórico","40000","1","2","1","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp3JhdENon2YLMvdi4SYTbV49eq6GPdu8HcxWZibeBOCQucvXKzy8QRhx44RUuLR72iJ8&usqp=CAU");
const nuevoLibro2 = new Libro("La piedra de luz", "Christian Jacq", "Novela histórica","50000","1","3","2","https://m.media-amazon.com/images/I/51LJ7u9wa5L._SL500_.jpg");
const nuevoLibro3 = new Libro("Ramsés: El hijo de la luz", "Christian Jacq", "Novela histórica","30000","1","4","3","https://www.greenlibros.com/cdn/shop/products/e0454a12-60c8-40c0-84a0-81a2c7dde50c-53_19420366_0_christianjacqramsselhijodelalu_1024x1024.jpg?v=1688153410");
const nuevoLibro4 = new Libro("El médico", "Noah Gordon", "Novela histórica","40000","1","10","4","https://i.ebayimg.com/images/g/4HsAAOSw3MNkg6Id/s-l960.jpg");
const nuevoLibro5 = new Libro("Los pilares de la Tierra", "Ken Follett", "Novela histórica","55000","1","15","5","https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT3ScjvrrGTMBykIWjUGXm_e_BDa_eyV2tKXNF7-OvNbny5v0bypJUU_i-pNyKXc4OHhqz4S1RDkQdKvC83f8cJBzJOh4C2oV_nr2I_PbIK&usqp=CAc");
const nuevoLibro6 = new Libro("La Sombra del Viento", "Carlos Ruiz Zafón", "Misterio","45000","1","3","6","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTmctzrSjg-TVuwsyeZQwy6A1ApSxewn3_WGe_jqX0OGLE_ZKM-MYojx7lvsqkNiGYRvrRA4-1rPzKLIliMI3xKPzGSbwefFJ9AWg2oV8-FCmblMIZowL8dOnaVSNlo40NqSf60qQY&usqp=CAc");
const nuevoLibro7 = new Libro("Del Hobbit", "J.R.R. Tolkien", "Fantasía","32000","1","9","7","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR7WuGpf0-sId23rMRkbj8hsuaBtOD6lUDYE523m2qRTLCqTnAowSjWk-NsExpFE_rODrDs8XZbaPrkIr_0gMoWOxfC9AwqX-d3JZNQR7gUR7IQP_W2DRhh&usqp=CAc");
const nuevoLibro8 = new Libro("El nombre del viento", "Patrick Rothfuss", "Fantasía épica","48000","1","6","8","https://images.cdn3.buscalibre.com/fit-in/360x360/fa/3c/fa3cd0450f8f59f3e4dcf35b4e0f8b71.jpg");
const nuevoLibro9 = new Libro("Cazadores de sombras: Ciudad de hueso", "Cassandra Clare", "Fantasía urbana","53000","1","8","9","https://images.cdn2.buscalibre.com/fit-in/360x360/b5/e4/b5e4f0f82c7df83d073462f6dea866ad.jpg");
const nuevoLibro10 = new Libro("El cuento de la criada", "Margaret Atwood", "Ciencia ficción","57000","1","7","10","https://images.cdn3.buscalibre.com/fit-in/360x360/9e/de/9ede512123e015bb390a10ba35f8d138.jpg");
const nuevoLibro11 = new Libro("Ankor","Jorge Angel Livraga","Filosofia","49000","1","19","11","https://m.media-amazon.com/images/I/61GuCAsNsdL._SY522_.jpg");
const nuevoLibro12 = new Libro("El misterio de la casa encantada", "Laura Gómez", "Misterio", "25000","1", "10", "12", "https://m.media-amazon.com/images/I/41Kjz3hahTL._SX342_SY445_.jpg");
const nuevoLibro13 = new Libro("Viaje a lo desconocido", "Carlos Ramírez", "Aventura", "30000","1", "8", "13", "https://img2.rtve.es/p/105091/imgbackground/?h=320");
const nuevoLibro14 = new Libro("El secreto del bosque", "Ana Martínez", "Fantasía", "28000","1" ,"15", "14", "https://m.media-amazon.com/images/I/51iGyZOSC-L._SX342_SY445_.jpg");
const nuevoLibro15 = new Libro("Amor en París", "María Rodríguez", "Romance", "20000","1", "20", "15", "https://m.media-amazon.com/images/I/41X3Ae9ipuL._SY445_SX342_.jpg");
const nuevoLibro16 = new Libro("La máquina del tiempo", "H.G. Wells", "Ciencia Ficción", "35000","1", "12", "16", "https://http2.mlstatic.com/D_NQ_NP_2X_773883-MLA32137917401_092019-F.webp");
const nuevoLibro17 = new Libro("Aprendiendo JavaScript", "Juan Pérez", "Tecnología", "40000","1", "5", "17", "https://http2.mlstatic.com/D_NQ_NP_2X_967141-MLU69767757320_062023-F.webp");
const nuevoLibro18 = new Libro("Historia de la pintura", "Luisa Gutiérrez", "Arte", "32000","1" ,"18", "18", "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSPEAhNehErwD5Buz-AIffRN8UyA3oynWuUGE8PePqggInUfwdk");
const nuevoLibro19 = new Libro("Cocina del mundo", "Chef Ricardo", "Gastronomía", "45000","1", "7", "19", "https://www.juanbohon.cl/wp-content/uploads/2020/09/image002.jpg");
const nuevoLibro20 = new Libro("Poemas del alma", "Gabriela Mistral", "Poesía", "22000", "1","25", "20", "https://www.poemas-del-alma.com/blog/wp-content/uploads/2023/01/mistral.jpg");
const nuevoLibro21 = new Libro("El último samurái", "Tom Cruise", "Historia", "38000", "1","9", "21", "https://pics.filmaffinity.com/the_last_samurai-270445769-msmall.jpg");
const nuevoLibro22 = new Libro("La isla misteriosa", "Julio Verne", "Aventura", "30000","1" ,"15", "22", "https://images.cdn3.buscalibre.com/fit-in/360x360/8e/49/8e4944bedf745f78bc280f759b0112a7.jpg");
const nuevoLibro23 = new Libro("El retrato de Dorian Gray", "Oscar Wilde", "Drama", "26000","1", "12", "23", "https://falabella.scene7.com/is/image/Falabella/gsc_110347578_35873_1?wid=1500&hei=1500&qlt=70");
const nuevoLibro24 = new Libro("Rebelión en la granja", "George Orwell", "Ficción política", "34000","1", "8", "24", "https://http2.mlstatic.com/D_NQ_NP_2X_884939-MLC46574428669_062021-F.webp");
const nuevoLibro25 = new Libro("Matar a un ruiseñor", "Harper Lee", "Drama legal", "29000","1" ,"10", "25", "https://images.cdn1.buscalibre.com/fit-in/360x360/fc/ca/fccabb1ecb9cf1df055f8f8898a4f311.jpg");
const nuevoLibro26 = new Libro("El señor de los anillos", "J.R.R. Tolkien", "Fantasía épica", "42000","1", "7", "26", "https://images.cdn1.buscalibre.com/fit-in/360x360/66/1a/661a3760157941a94cb8db3f5a9d5060.jpg");
const nuevoLibro27 = new Libro("Crónica de una muerte anunciada", "Gabriel García Márquez", "Realismo mágico", "24000","1", "18", "27", "https://images.cdn2.buscalibre.com/fit-in/360x360/30/2e/302ec58225bc7691ec36ac3bf1697efc.jpg");
const nuevoLibro28 = new Libro("El nombre de la rosa", "Umberto Eco", "Misterio histórico", "36000", "1","6", "28", "https://images.cdn2.buscalibre.com/fit-in/360x360/44/51/4451db7bb092a71eb16850488d5f67e0.jpg");
const nuevoLibro29 = new Libro("Orgullo y prejuicio", "Jane Austen", "Romance clásico", "28000", "1","22", "29", "https://falabella.scene7.com/is/image/Falabella/gsc_115230639_1048288_1?wid=1500&hei=1500&qlt=70");
const nuevoLibro30 = new Libro("Cien años de soledad", "Gabriel García Márquez", "Realismo mágico", "40000","1", "9", "30", "https://images.cdn3.buscalibre.com/fit-in/360x360/b9/d5/b9d5d415d11423d0f9e98074ee6997d9.jpg");
const nuevoLibro31 = new Libro("Las aventuras de Sherlock Holmes", "Arthur Conan Doyle", "Detective", "32000","1", "14", "31", "https://images.cdn3.buscalibre.com/fit-in/360x360/60/4c/604c6aeba07c02fee242e90144451eb9.jpg");
const nuevoLibro32 = new Libro("El gran Gatsby", "F. Scott Fitzgerald", "Ficción moderna", "37000","1", "11", "32", "https://falabella.scene7.com/is/image/Falabella/gsc_110346454_26094_1?wid=1500&hei=1500&qlt=70");
const nuevoLibro33 = new Libro("Don Quijote de la Mancha", "Miguel de Cervantes", "Clásico español", "33000","1", "13", "33", "https://falabella.scene7.com/is/image/Falabella/gsc_121410099_3024149_1?wid=1500&hei=1500&qlt=70");
const nuevoLibro34 = new Libro("El principito", "Antoine de Saint-Exupéry", "Fábula", "26000","1" ,"16", "34", "https://falabella.scene7.com/is/image/Falabella/gsc_122153524_3252883_1?wid=1500&hei=1500&qlt=70");
const nuevoLibro35 = new Libro("Moby Dick", "Herman Melville", "Aventura marina", "39000", "1","10", "35", "https://images.cdn2.buscalibre.com/fit-in/360x360/3d/d3/3dd3bc64abf0b389ae00fbdada920f84.jpg");
const nuevoLibro36 = new Libro("Frankenstein", "Mary Shelley", "Ciencia ficción gótica", "30000","1", "12", "36", "https://falabella.scene7.com/is/image/Falabella/gsc_113584976_683577_1?wid=1500&hei=1500&qlt=70");
const nuevoLibro37 = new Libro("Los miserables", "Victor Hugo", "Drama histórico", "35000","1", "8", "37", "https://images.cdn1.buscalibre.com/fit-in/360x360/f3/ef/f3ef4b342c9ed29911d6ce25e498a4f7.jpg");
const nuevoLibro38 = new Libro("Drácula", "Bram Stoker", "Terror gótico", "31000","1", "15", "38", "https://falabella.scene7.com/is/image/Falabella/gsc_110346780_26263_1?wid=1500&hei=1500&qlt=70");
const nuevoLibro39 = new Libro("El perfume", "Patrick Süskind", "Novela histórica", "29000","1", "17", "39", "https://image.cdn0.buscalibre.com/60e394de8463b5f3158b7a16.__RS360x360__.jpg");
const nuevoLibro40 = new Libro("Las uvas de la ira", "John Steinbeck", "Ficción social", "36000","1", "9", "40", "https://images.cdn1.buscalibre.com/fit-in/360x360/d0/ce/d0ced4b0ab4e0a863a2ef564f876732a.jpg");
const nuevoLibro41 = new Libro("Harry Potter y la piedra filosofal", "J.K. Rowling", "Fantasía juvenil", "38000","1", "11", "41", "https://falabella.scene7.com/is/image/Falabella/gsc_116306931_1439313_1?wid=1500&hei=1500&qlt=70");
const libros       = [nuevoLibro1,nuevoLibro2,nuevoLibro3,nuevoLibro4,nuevoLibro5,nuevoLibro6,nuevoLibro7,nuevoLibro8,nuevoLibro9,nuevoLibro10, nuevoLibro11, nuevoLibro12, nuevoLibro13,nuevoLibro14,nuevoLibro15,nuevoLibro16,nuevoLibro17,nuevoLibro18,nuevoLibro19,nuevoLibro20,nuevoLibro21,nuevoLibro22, nuevoLibro23, nuevoLibro24, nuevoLibro25,nuevoLibro26,nuevoLibro27,nuevoLibro28,nuevoLibro29,nuevoLibro30,nuevoLibro31,nuevoLibro32,nuevoLibro33,nuevoLibro34, nuevoLibro35, nuevoLibro36, nuevoLibro37,nuevoLibro38,nuevoLibro39,nuevoLibro40,nuevoLibro41];

/*
    Con estás lineas de código obtenemos información del Local Storage, si existe se almacena es un arreglo, de lo contrario
    El arreglo se deja vacio.
    El objetivo a conseguir que una vez recuperada la información de Local Storage esta se deje en el carro de compra.
    En resumen de almacen los libros en Local Storage, libros que se quieren comprar.
    */
let StorageLibros
let StorageLibrosLS = localStorage.getItem("StorageLibros");
if (StorageLibrosLS)
{
    StorageLibros = JSON.parse(StorageLibrosLS);
}
else
{
    StorageLibros=[];
}

/*  Con estás lineas de código se obtiene elementos del DOM*/

/*  Aquí especificamente se mostraran las tarjetas de cada Libro*/
let cardGroup =   document.getElementById("card-group");

/*  Aquí se mostraran los libros que se llevan al carro de compra*/
let itemsCarrito =   document.getElementById("itemsCarrito");

/*  Aquí se utiliza para obtener todos los elementos asociados a la clase boton,
    Cada libro tiene asociado un botón de compra, a través de el ID del boton se puede identificar el libro.
    De esta manera cuando le hagan click al botón comprar podremos saber que libro es y se agregara al carro de compra.
*/
let botonAgregar = document.querySelectorAll(".boton");

/*  Al momento de cargar la pagina se invoca este metodo/ función.
    Se le traspasa el arreglo que contiene todos los libros ya gregados anteriormente,
    De esta manera se creara una tarjeta para cada libro y se agregran al documento.
*/
function agregarCards(arreglo)
{
    arreglo.forEach(e => {
        const card = document.createElement("div"); /*Aquí creo un elemento HTML, y se instancia en la constante card*/
        card.className =  "card"; /*Al elemento HTML <div> le ponemos la clase card (<div class="card">)*/
        card.id =   e.numSerie;/*al igual que la anterior, ahora se le deja un id el cual contendra el N° de serie del libro */
        card.innerHTML= /*  Esta se utiliza para crear estructura html de manera dinamica, luego incrustar con 
                            los atributos requeridos dentro del div padre, esto queda dentro del objeto instanciado
                            card. En otras palabras estamos creando las tarjetas para cada libro.
                        */
                        `<div>
                            <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="${e.imagen}" class="img-fluid rounded-start" width="80px" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">${e.titulo}</h5>
                                            <p class="card-text">Autor: ${e.autor}</p>
                                            <p class="card-text">Genero: ${e.genero}</p>   
                                            <p class="card-text">Precio: ${e.precio.toLocaleString("es-CL", { style: 'currency', currency: 'CLP' })}</p>  
                                            <p class="card-text">Stock: ${e.stock}</p>                                     
                                            <button type="button" id="${e.numSerie}" class="boton">Comprar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `;
         cardGroup.appendChild(card);/*  Aquí se agrega los elementos que contiene card dentro del objeto cardGroup
                                        Osea la estructura HTML dinamica construida, queda dentro del 
                                        <div id="card-group"> padre, aquí se contendrán/visualizaran todas 
                                        las tarjetas de cada libro. 
                                    */
    });
    AgregarStorage();/* Llamado al metodo que permite agregar libros al local storage al presionar el 
                        botón comprar.
                     */
    carrito(StorageLibros); /*  Llamado al metodo que permite agragar libros al carrito de compra al presionar
                                el botón comprar.
                            */
}

agregarCards(libros); /*Este metodo/ función se ejecuta al iniciar, carga todos los libros ya explicado anteriormente*/

/*  Este evento se activa al momento de presionar el botón buscar libro, hace el llamdo al metodo buscarLibro
    se le traspasa el valor obtenido del elemento input. pero antes al valor del elemento input se le 
    quitan los espacios y acentos.
*/
document.getElementById('btnBuscar').addEventListener('click', function() {
    // Obtén el valor del input
    let datoIngresado = document.getElementById('buscaLibro').value;
        datoIngresado = quitarAcentosYEspacios(datoIngresado);
    buscarLibro(datoIngresado);
});

/*
    Este metodo recibe un arreglo con el o los libros que se deben agregar a la sección carrito de compra
    en la pagina index.html. 
 */
function carrito(librosParaElCarrito){
        /*Aquí se utiliza para obtener todos los elementos asociados a la clase .btn-eliminar*/
        let botonQuitar = document.querySelectorAll(".btn-eliminar");
        librosParaElCarrito.forEach(e => {
        const carrito = document.createElement("div");/*Crea un nuevo elemento html y se instancia en el objeto carrito*/
        carrito.innerHTML=  /*  Se crea un estructura HTML dinamica con los atributos que requiero.
                                esto representara/ contendra en el frontEnd los libros que se agregaran al carrito 
                            */
                        `
                        <section class= "SectionCarro">
                            <div class="CarritoDetalle">
                                <div class="carritoImagen">   
                                <div> <img src=${e.imagen} rounded-start" width="40px" alt="..."></div>
                                    <p><h2 class="h2Carrito"> ${e.titulo}</h2></p>
                                    <p><h2 class="h2Carrito">${e.precio.toLocaleString("es-CL", { style: 'currency', currency: 'CLP' })}</h2</p>  
                                </div>
                                <div class="selectorCantidad">                                    
                                        <p><i class="fa-solid fa-minus restaCantidad" id="${e.numSerie}"></i></p>
                                        <div class="carritoCantidadItem"><input class="valorCantidad" id="inp-${e.numSerie}" type="text" value="${e.cantidad}" disabled></div>
                                        <p><i class="fa-solid fa-plus sumaCantidad" id="${e.numSerie}"></i></p>
                                        <p><i class="fa-solid fa-trash btn-eliminar" id="${e.numSerie}"></i></p>
                                </div>
                            </div>
                        </section>
                        `;
        itemsCarrito.appendChild(carrito);
})
    /*  Llamar a EventosEliminar() desde aquí, después de crear dinámicamente los elementos del carrito me 
        aseguro que los nuevos elementos tengan los eventos de eliminación asociados a ellos.
    */
    EventosEliminar();
    sumaCantidad();
    restaCantidad();
    sumatotal();
}

/*Permite este metodo dejar libros dentro del Storage Local siempre y cuando no existan*/
function AgregarStorage(){
    botonAgregar = document.querySelectorAll(".boton"); /*seleccionar todos los elementos en el documento que tienen la clase ".boton"*/
    botonAgregar.forEach(boton=>{ /*Recorremos todos elementos, obteniendo el numero ID*/
        boton.onclick =(e)=>{ /*Al hacer click al botón comprar se obtiene su ID luego se busca si existe en los libros
                                existentes, Si existe, se valida si esta almacenado si no es así, lo agrega.
                              */
            const numeroSerieLibro = e.currentTarget.id;
            const librosEncontrados = libros.find(libro => libro.numSerie == numeroSerieLibro);
            if (ValidaLibro(numeroSerieLibro)==-1)
            {
                StorageLibros.push(librosEncontrados);/*Se agrega libro al final del arreglo*/
                localStorage.setItem("StorageLibros",JSON.stringify(StorageLibros));/*Se agrega el libro con sus atributos
                                                                                    al local storage del navegador, a través del arreglo
                                                                                    antes si, se convierte el arreglo en una cadena JSON,
                                                                                    ya que Local Storage solo permite cadenas de textos.
                                                                                    */
                carrito([librosEncontrados]);/*Se muestra, visualiza en el front, en la sección carrito de compra
                                            los libros*/
            }else /*Si el libro ya esta almacenado (existe en el carro de compra), entrega un popup, donde expresa
                    que el libro ya fue agregado*/
            {
                //Se muestra por pantalla mensaje a través de libreria Swal.fire 
                alertaPopUp("error", "Este libro ya fue agregado", "Si quiere agregar otro, favor agregar en el carro de compra.");
            }
        } 
    })
}

function EventosEliminar() {
    let botonQuitar = document.querySelectorAll(".btn-eliminar");
    
    botonQuitar.forEach(boton => {
        boton.addEventListener('click', function () {
            QuitarStorage([boton]); 
        });
    });
}

function QuitarStorage(botonQuitar){;
    botonQuitar.forEach(e => {
            if (ValidaLibro(e.id)!==-1)
            {
                reiniciaCantidadLibro(e.id);
                StorageLibros.splice(ValidaLibro(e.id), 1);   
                localStorage.setItem("StorageLibros", JSON.stringify(StorageLibros));
                removerDOMSectionCarrito(e.id);
                sumatotal();
                notificacionToastify("Titulo quitado del carrito");
            }
        } 
    )
}

function validaStock(numSerie) {
    let libroEncontrado = libros.find((lib)=>lib.numSerie === numSerie);
    if (libroEncontrado) {
        return libroEncontrado.stock;
    } else {
        return 0;
        };
}

function agregarCantidad(botonAgregar) {;
    botonAgregar.forEach(boton => {
        if (ValidaLibro(boton.id) !== -1) {
            let input = document.getElementById(`inp-${boton.id}`);
            if (input !== null) {
                if (parseFloat(input.value) < validaStock(boton.id))
                {
                    const libroEncontrado = StorageLibros.find(libro => libro.numSerie === boton.id);
                    if(libroEncontrado){
                        input.value = parseFloat(input.value) + 1;
                        libroEncontrado.cantidad = input.value;
                        sumatotal();
                    }
                }else
                {
                    notificacionToastify("No tenemos más stock, no puede seguir sumando más Titulos de este libro.");
                }
            }
    }
    });
}

function sumaCantidad() {
    const botonAgregar = document.querySelectorAll(".sumaCantidad");
    botonAgregar.forEach(boton => {
        boton.addEventListener('click', function () {
            agregarCantidad([boton]);
        });
    });
}

function disminuyeCantidad(botonDisminuir){;
    botonDisminuir.forEach(boton => {
            if (ValidaLibro(boton.id)!==-1){
                let input = document.getElementById(`inp-${boton.id}`);
                let sumaTotal = document.getElementsByClassName("carrito-precio-total");
                if (input !== null) {
                    if(parseFloat(input.value) >1){ 
                        const libroEncontrado = StorageLibros.find(libro => libro.numSerie === boton.id);
                        if(libroEncontrado){
                            input.value = parseFloat(input.value) - 1;
                            libroEncontrado.cantidad = input.value;
                            sumatotal();
                        }
                    }
                }
            }
        });
}

function restaCantidad() {
    let botonDisminuir = document.querySelectorAll(".restaCantidad");
    botonDisminuir.forEach(boton => {
        boton.addEventListener('click', function () {
            disminuyeCantidad([boton]);
        });
    });
}


function removerDOMSectionCarrito(IDnumeroSerie){
    const SectionCarro = document.querySelectorAll(".SectionCarro");
    SectionCarro.forEach(section => {
        const IDnumeroSerieBuscado = section.querySelector(`.btn-eliminar[id="${IDnumeroSerie}"]`);
        if (IDnumeroSerieBuscado){
            section.remove();
        }
    });
}

function ValidaLibro(numSerie) {
    let index = StorageLibros.findIndex((lib)=>lib.numSerie=== numSerie);
    if (index !== -1) {
        return index;
    } else {
        return -1
    };
}

function buscarLibro(titulo) {
    titulo              = quitarAcentosYEspacios(titulo.toUpperCase());
    let libroEncontrado = libros.find((lib)=>quitarAcentosYEspacios(lib.titulo.toUpperCase()) === titulo);
    if (libroEncontrado) {
        const cardd = document.getElementById(libroEncontrado.numSerie);
        cardd.scrollIntoView({behavior: 'smooth'});
    } else {
        //Se muestra por pantalla mensaje a través de libreria Swal.fire 
        alertaPopUp("error", "Este libro no existe", "Favor intente buscar otro");
    }
}

function quitarAcentosYEspacios(cadena) {
    // Reemplazar acentos
    let cadenaSinAcentos = cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Reemplazar espacios
    let cadenaSinEspacios = cadenaSinAcentos.replace(/\s/g, "");

    return cadenaSinEspacios;
}
function notificacionToastify(text){
    Toastify({
        text: text,
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        //newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
    }).showToast();
}

function alertaPopUp(icon, titulo, texto){
    Swal.fire({
        icon: icon,
        title: titulo,
        text: texto
    });
}

function sumatotal(){
    let sumaTotal = 0;
    // Actualizar el objeto en localStorage
    localStorage.setItem("StorageLibros", JSON.stringify(StorageLibros));

    StorageLibros.forEach(libro => {
        sumaTotal = (parseFloat(libro.precio) * parseFloat(libro.cantidad) ) + parseFloat(sumaTotal);
    });
    document.getElementsByClassName('precioTotal')[0].innerText = '$'+(sumaTotal).toLocaleString("es") + ",00";
}

document.getElementById('id-btnPagar').addEventListener('click', function() {
    limpiarCarrito();
    reiniciaCantidadLibroAll();
    console.table(libros);
    console.table(StorageLibros);
      //Se muestra por pantalla mensaje a través de libreria Swal.fire 
    alertaPopUp("success", "Gracias por confirmar el pago", "Se limpiara el carrito para reiniciar el ejercicio.");
});

function limpiarCarrito() {
    // Elimina la clave "StorageLibros" del localStorage
    localStorage.removeItem("StorageLibros");
    // Limpiar el arreglo StorageLibros
    StorageLibros = [];
    // Elimino  los elementos del DOM que están en el carrito
    limpiarDOMCarrito();
}

// Con esta función limpio el carrito una vez que se realiza el pago.
function limpiarDOMCarrito() {
    const SectionCarro = document.querySelectorAll(".SectionCarro");
    SectionCarro.forEach(section => {
            section.remove();
            document.getElementsByClassName('precioTotal')[0].innerText = '$'+(0).toLocaleString("es") + ",00";
    });
}

function reiniciaCantidadLibro(numSerie){
    const libroEncontrado = libros.find(libro => libro.numSerie === numSerie);
    if(libroEncontrado){
        libroEncontrado.cantidad = 1;
    }
}

function reiniciaCantidadLibroAll(){
    libros.forEach(Libros => {
        Libros.cantidad = 1;
        
    });
}