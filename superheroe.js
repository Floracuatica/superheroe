// Edad aleatoria entre 20 y 40, redondeada
let edadAleatoria = Math.round(Math.random() * (40 - 20) + 20);

// Objeto superhéroe
const superheroe = {
  nombre: "Voltman",
  edad: edadAleatoria,
  habilidades: ["Volar", "Invisibilidad", "Súper fuerza"],
  activo: true,
  saludo: function() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
};

// Usando notación de punto y corchetes
console.log("Usando notación de punto:", superheroe.nombre);
console.log("Usando notación de corchetes:", superheroe["edad"]);

// Mostrar saludo
superheroe.saludo();

// Mostrar habilidades
console.log("Mis habilidades son:", superheroe.habilidades.join(", ") + ".");

// Mostrar edad aleatoria
console.log("Mi edad fue asignada aleatoriamente:", superheroe.edad);

// Usando objeto Math para obtener el valor máximo entre dos niveles de energía
let energia1 = 85;
let energia2 = 92;
let energiaMaxima = Math.max(energia1, energia2);
console.log("Nivel máximo de energía:", energiaMaxima);

// Usando objeto String para manipular el nombre
let nombreMayus = superheroe.nombre.toUpperCase();
let primeraLetra = superheroe.nombre.charAt(0);

console.log("Nombre en mayúsculas:", nombreMayus);
console.log("Primera letra de mi nombre:", primeraLetra);

// Comparar versión primitiva y objeto del nombre
let nombrePrimitivo = superheroe.nombre;
let nombreObjeto = new String(superheroe.nombre);

console.log("¿Nombre como objeto?", nombreObjeto instanceof String);
console.log("¿Nombre primitivo?", typeof nombrePrimitivo === "string");
