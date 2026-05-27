// ==========================================
// TASK 1 & TASK 5: Creación del Objeto de Productos y Validaciones
// ==========================================

// Función para validar que un producto tenga datos correctos antes de procesarlo
function validarProducto(producto) {
    if (!producto.id || typeof producto.id !== 'string') {
        console.error(`Error: El ID es inválido para el producto.`, producto);
        return false;
    }
    if (!producto.nombre || typeof producto.nombre !== 'string') {
        console.error(`Error: El nombre es inválido para el producto con ID ${producto.id}.`);
        return false;
    }
    if (typeof producto.precio !== 'number' || producto.precio <= 0) {
        console.error(`Error: El precio debe ser un número mayor a 0 para el producto ${producto.nombre}.`);
        return false;
    }
    return true;
}

// Datos iniciales en bruto para el inventario
const datosProductos = {
    prod01: { id: "p01", nombre: "Laptop Asus", precio: 1200 },
    prod02: { id: "p02", nombre: "Mouse Logi", precio: 25 },
    prod03: { id: "p03", nombre: "Monitor Dell", precio: -150 }, // Caso de prueba inválido (precio negativo)
    prod04: { id: "p04", nombre: "Teclado Mecánico", precio: 80 }
};

// Objeto final que contendrá solo los productos que pasen la validación
const productosValidos = {};

// Validación y filtrado utilizando métodos de Object
console.log("--- [Validación de Productos] ---");
Object.entries(datosProductos).forEach(([claveIncial, producto]) => {
    if (validarProducto(producto)) {
        // Si es válido, se agrega a nuestro objeto final de productos
        productosValidos[producto.id] = {
            nombre: producto.nombre,
            precio: producto.precio
        };
    }
});


// ==========================================
// TASK 2: Uso de Set en JavaScript
// ==========================================
console.log("\n--- [Trabajando con Sets] ---");

// 1. Crea un Set con una lista de números que incluya valores repetidos
const numerosSet = new Set([10, 20, 30, 20, 40, 10, 50]);

// 2. Imprime en consola el contenido del Set (elimina duplicados automáticamente)
console.log("Set inicial (sin duplicados automáticamente):", numerosSet);

// 3. Agrega un nuevo número al Set utilizando .add()
numerosSet.add(60);
console.log("Set después de añadir el 60:", numerosSet);

// 4. Verifica si un número específico existe con .has()
const buscarNumero = 30;
console.log(`¿El número ${buscarNumero} existe en el Set?:`, numerosSet.has(buscarNumero));

// 5. Elimina un número del Set con .delete()
numerosSet.delete(20);
console.log("Set después de eliminar el 20:", numerosSet);

// 6. Recorre el Set utilizando un for…of
console.log("Recorriendo el Set con for...of:");
for (const numero of numerosSet) {
    console.log(`-> Valor: ${numero}`);
}


// ==========================================
// TASK 3: Creación de un Map
// ==========================================

// Creamos un Map para relacionar Categoría (Clave) -> Nombre del Producto (Valor)
const categoriasMap = new Map();

// Asignamos valores al Map reflejando la información adicional de los productos válidos
categoriasMap.set("Cómputo", productosValidos["p01"].nombre); // Laptop
categoriasMap.set("Accesorios", productosValidos["p02"].nombre); // Mouse
categoriasMap.set("Componentes", productosValidos["p04"].nombre); // Teclado


// ==========================================
// TASK 4 & TASK 5: Iteración y Pruebas Finales
// ==========================================
console.log("\n--- [Iteración y Reportes Finales] ---");

// A. Iteración del Objeto de Productos utilizando for...in
console.log("1. Listando propiedades y valores del objeto (for...in):");
for (const idPropiedad in productosValidos) {
    const prod = productosValidos[idPropiedad];
    console.log(`Propiedad clave [${idPropiedad}] -> Nombre: ${prod.nombre}, Precio: $${prod.precio}`);
}

// B. Métodos avanzados de Object (Keys, Values, Entries) para demostración
console.log("\nDemostración de métodos de Object:");
console.log("Object.keys():", Object.keys(productosValidos));
console.log("Object.values():", Object.values(productosValidos));

// C. Recorrer el Set (Ya se realizó en la Task 2, se incluye aquí de forma simplificada)
console.log("\n2. Lista de elementos únicos del Set (for...of):");
for (const elemento of numerosSet) {
    console.log(`Elemento único: ${elemento}`);
}

// D. Recorrer el Map usando forEach() de forma descriptiva
console.log("\n3. Categorías y nombres de productos (Map con forEach):");
categoriasMap.forEach((producto, categoria) => {
    console.log(`En la categoría [${categoria}] tenemos el producto: ${producto}`);
});