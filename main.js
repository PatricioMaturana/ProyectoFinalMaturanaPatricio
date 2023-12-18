/*Creo la clase Producto para instanciar varios objetos productos, objetos que tendrán como propiedades; el titulo, ctegoria, precio, cantidad, etc.*/
class Producto{
    constructor(id, title, category, price, cantidad, stock, image, description){
        this.id  =   id;
        this.titulo =   title;
        this.categoria = category;
        this.precio =   parseFloat(price);
        this.cantidad = parseFloat(cantidad);
        this.stock  =   parseFloat(stock);
        this.imagen =   image;
        this.descripcion = description;
    }
}



const listaProductos = [];
const producto=[];
const creaProductos = ()=> {
listaProductos.forEach(lista => {
    const instanciaProducto = new Producto(lista.id, lista.title, lista.category, lista.price, 1, 10, lista.image, lista.description)
    producto.push(instanciaProducto);
});
agregarCards(producto); /*Este metodo/ función se ejecuta al iniciar, carga todos los productos ya explicado anteriormente*/
}

const obtenerProductos = async () =>
{
    try{
        const response = await fetch(`https://fakestoreapi.com/products`)
        const data = await response.json()
        listaProductos.push(...data);
        creaProductos();
    }catch(error){
        console.log(error);
    }
}

obtenerProductos();
    /*
        Con estás lineas de código obtenemos información del Local Storage, si existe se almacena es un arreglo, de lo contrario
        El arreglo se deja vacio.
        El objetivo a conseguir que una vez recuperada la información de Local Storage esta se deje en el carro de compra.
        En resumen de almacen los productos en Local Storage, productos que se quieren comprar.
        */
let Storage
let StorageLS = localStorage.getItem("Storage");
if (StorageLS)
{
    Storage = JSON.parse(StorageLS);
}
else
{
    Storage=[];
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
                card.id =   e.id;/*al igual que la anterior, ahora se le deja un id el cual contendra el N° de serie del libro */
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
                                                    <p class="card-text">Genero: ${e.categoria}</p>   
                                                    <p class="card-text">Precio: ${e.precio.toLocaleString("es-CL", { style: 'currency', currency: 'CLP' })}</p>  
                                                    <p class="card-text">Stock: ${e.stock}</p>                                     
                                                    <button type="button" id="${e.id}" class="boton">Comprar</button>
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
            AgregarStorage();/* Llamado al metodo que permite agregar productos al local storage al presionar el 
                                botón comprar.
                             */
            carrito(Storage); /*  Llamado al metodo que permite agragar productos al carrito de compra al presionar
                                        el botón comprar.
                                    */
        }
    
        
        /*  Este evento se activa al momento de presionar el botón buscar producto, hace el llamado al metodo buscar
            se le traspasa el valor obtenido del elemento input. pero antes al valor del elemento input se le 
            quitan los espacios y acentos.
        */
        document.getElementById('btnBuscar').addEventListener('click', function() {
            // Obtén el valor del input
            let datoIngresado = document.getElementById('buscaProducto').value;
                datoIngresado = quitarAcentosYEspacios(datoIngresado);
            buscar(datoIngresado);
        });
        
        /*
            Este metodo recibe un arreglo con el o los libros que se deben agregar a la sección carrito de compra
            en la pagina index.html. 
         */
        function carrito(Carrito){
                /*Aquí se utiliza para obtener todos los elementos asociados a la clase .btn-eliminar*/
                let botonQuitar = document.querySelectorAll(".btn-eliminar");
                Carrito.forEach(e => {
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
                                                <p><i class="fa-solid fa-minus restaCantidad" id="${e.id}"></i></p>
                                                <div class="carritoCantidadItem"><input class="valorCantidad" id="inp-${e.id}" type="text" value="${e.cantidad}" disabled></div>
                                                <p><i class="fa-solid fa-plus sumaCantidad" id="${e.id}"></i></p>
                                                <p><i class="fa-solid fa-trash btn-eliminar" id="${e.id}"></i></p>
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
        
        /*Permite este metodo dejar productos dentro del Storage Local siempre y cuando no existan*/
        function AgregarStorage(){
            botonAgregar = document.querySelectorAll(".boton"); /*seleccionar todos los elementos en el documento que tienen la clase ".boton"*/
            botonAgregar.forEach(boton=>{ /*Recorremos todos elementos, obteniendo el numero ID*/
                boton.onclick =(e)=>{ /*Al hacer click al botón comprar se obtiene su ID luego se busca si existe en los productos
                                        existentes, Si existe, se valida si esta almacenado si no es así, lo agrega.
                                      */
                    const id = e.currentTarget.id;
                    const Encontrados = producto.find(encontrado => encontrado.id == id);
                    if (Valida(id)==-1)
                    {
                        Storage.push(Encontrados);/*Se agrega al final del arreglo*/
                        localStorage.setItem("Storage",JSON.stringify(Storage));/*Se agrega el producto con sus atributos
                                                                                            al local storage del navegador, a través del arreglo
                                                                                            antes si, se convierte el arreglo en una cadena JSON,
                                                                                            ya que Local Storage solo permite cadenas de textos.
                                                                                            */
                        carrito([Encontrados]);/*Se muestra, visualiza en el front, en la sección carrito de compra
                                                    los libros*/
                    }else /*Si el producto ya esta almacenado (existe en el carro de compra), entrega un popup, donde expresa
                            que el producto ya fue agregado*/
                    {
                        //Se muestra por pantalla mensaje a través de libreria Swal.fire 
                        alertaPopUp("error", "Este producto ya fue agregado", "Si quiere agregar otro, favor agregar en el carro de compra.");
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
                    if (Valida(e.id)!==-1)
                    {
                        reiniciaCantidad(e.id);
                        Storage.splice(Valida(e.id), 1);   
                        localStorage.setItem("Storage", JSON.stringify(Storage));
                        removerDOMSectionCarrito(e.id);
                        sumatotal();
                        notificacionToastify("Titulo quitado del carrito");
                    }
                } 
            )
        }
        
        function validaStock(id) {
            let Encontrado = producto.find((p)=>parseFloat(p.id) === parseFloat(id) );
            if (Encontrado) {
                return Encontrado.stock;
            } else {
                return 0;
                };
        }
        
        function agregarCantidad(botonAgregar) {;
            botonAgregar.forEach(boton => {
                if (Valida(boton.id) !== -1) {
                    let input = document.getElementById(`inp-${boton.id}`);
                    if (input !== null) {
                        if (parseFloat(input.value) < validaStock(boton.id))
                        {
                            const Encontrado = Storage.find(p => parseFloat(p.id) === parseFloat(boton.id) );
                            if(Encontrado){
                                input.value = parseFloat(input.value) + 1;
                                Encontrado.cantidad = input.value;
                                sumatotal();
                            }
                        }else
                        {
                            notificacionToastify("No tenemos más stock, no puede seguir sumando más Titulos.");
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
                    if (Valida(boton.id)!==-1){
                        let input = document.getElementById(`inp-${boton.id}`);
                        let sumaTotal = document.getElementsByClassName("carrito-precio-total");
                        if (input !== null) {
                            if(parseFloat(input.value) >1){ 
                                const Encontrado = Storage.find(p => parseFloat(p.id) === parseFloat(boton.id) );
                                if(Encontrado){
                                    input.value = parseFloat(input.value) - 1;
                                    Encontrado.cantidad = input.value;
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
        
        
        function removerDOMSectionCarrito(ID){
            const SectionCarro = document.querySelectorAll(".SectionCarro");
            SectionCarro.forEach(section => {
                const IDBuscado = section.querySelector(`.btn-eliminar[id="${ID}"]`);
                if (IDBuscado){
                    section.remove();
                }
            });
        }
        
        function Valida(id) {
            let index = Storage.findIndex((p)=>parseFloat(p.id)=== parseFloat(id));
            if (index !== -1) {
                return index;
            } else {
                return -1
            };
        }
        
        function buscar(titulo) {
            titulo              = quitarAcentosYEspacios(titulo.toUpperCase());
            let Encontrado = producto.find((p)=>quitarAcentosYEspacios(p.titulo.toUpperCase()) === titulo);
            if (Encontrado) {
                const cardd = document.getElementById(Encontrado.id);
                cardd.scrollIntoView({behavior: 'smooth'});
            } else {
                //Se muestra por pantalla mensaje a través de libreria Swal.fire 
                alertaPopUp("error", "Este producto no existe", "Favor intente buscar otro");
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
            localStorage.setItem("Storage", JSON.stringify(Storage));
        
            Storage.forEach(producto => {
                sumaTotal = (parseFloat(producto.precio) * parseFloat(producto.cantidad) ) + parseFloat(sumaTotal);
            });
            document.getElementsByClassName('precioTotal')[0].innerText = '$'+(sumaTotal).toLocaleString("es") + ",00";
        }
        
        document.getElementById('id-btnPagar').addEventListener('click', function() {
            limpiarCarrito();
            reiniciaCantidadAll();
 
              //Se muestra por pantalla mensaje a través de libreria Swal.fire 
            alertaPopUp("success", "Gracias por confirmar el pago", "Se limpiara el carrito para reiniciar el ejercicio.");
        });
        
        function limpiarCarrito() {
            // Elimina la clave "Storage" del localStorage
            localStorage.removeItem("Storage");
            // Limpiar el arreglo Storage
            Storage = [];
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
        
        function reiniciaCantidad(id){
            const Encontrado = producto.find(encontrado => encontrado.id === id);
            if(Encontrado){
                Encontrado.cantidad = 1;
            }
        }
        
        function reiniciaCantidadAll(){
            producto.forEach(Productos => {
                Productos.cantidad = 1;
                
            });
        }