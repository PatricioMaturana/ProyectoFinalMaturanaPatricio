﻿# PROYECTO FINAL- JAVA SCRIPT
Este proyecto en JavaScript consiste en la creación de una clase llamada Producto para instanciar objetos que representan productos. Cada objeto tiene propiedades como título, categoría, precio, cantidad, stock, imagen y descripción.

Se realiza una solicitud a una API externa (https://fakestoreapi.com/products) para obtener información de productos, que luego se almacena en un array llamado listaProductos. Estos productos se instancian como objetos de la clase Producto y se almacenan en otro array llamado producto.

El código también incluye funciones para manejar la interacción con el carrito de compras. Los productos seleccionados se almacenan en el Local Storage del navegador, y se utilizan funciones para agregar, quitar y actualizar productos en el carrito. Además, se implementa una función de búsqueda de productos.

El proyecto utiliza eventos del DOM para realizar acciones como agregar productos al carrito, quitar productos, buscar productos y limpiar el carrito después de un pago simulado.

Se emplean notificaciones visuales con librerías como Toastify y Swal (SweetAlert) para proporcionar retroalimentación al usuario sobre las acciones realizadas.

En resumen, este proyecto en JavaScript se enfoca en la creación de un carrito de compras interactivo, con funcionalidades de búsqueda, gestión de cantidades, y almacenamiento persistente en el Local Storage del navegador.
