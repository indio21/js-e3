const Pizzas = [
    {
        id: 1,
        nombre: 'Muzzarella',
        ingredientes: ['Queso', 'Oregano'],
        precio: 1000
    },
    {
        id: 2,
        nombre: 'Especial',
        ingredientes: ['Queso', 'Jamon'],
        precio: 1200
    },
    {
        id: 3,
        nombre: 'Napolitana',
        ingredientes: ['Queso', 'Tomate', 'Oregano'],
        precio: 1600
    },
    {
        id: 4,
        nombre: 'Anana',
        ingredientes: ['Jamon Crudo', 'Anana'],
        precio: 1800
    },
    {
        id: 5,
        nombre: 'Pollo',
        ingredientes: ['Queso', 'Jamon', 'Pollo'],
        precio: 1650
    },
    {
        id: 6,
        nombre: 'Calabresa',
        ingredientes: ['Queso', 'Salamin'],
        precio: 1400
    },
]

let error = '';
const barra = '----------------------'

const boton = document.getElementById("btn-obtener")
const input = document.getElementById("id_pizza")
const contenedor = document.querySelector("#container")
const precio_error = document.querySelector("#precio_error")
const nombre_pizza = document.querySelector("#pizza")
const form = document.querySelector(".form")

console.log(boton)
console.log(input)
console.log(contenedor)
console.log(precio_error)
console.log(nombre_pizza)
console.log(form)

function obtenerPizza(event) {
    event.preventDefault();

    /*if (typeof(parseInt(input.value)) !== 'number'){
        error = 'No es un número'
    }*/
    const existePizza = Pizzas.find(pizza => pizza.id === parseInt(input.value));

    if (typeof existePizza === 'undefined') {
        nombre_pizza.textContent = ''
        precio_error.textContent = `No existe la pizza`
        return;
    }

    nombre_pizza.textContent = `La pizza es ${existePizza.nombre}`
    precio_error.textContent = `El precio es $ ${existePizza.precio}`

}

function limpiar(e) {
    input.value = '';
}

form.onsubmit = obtenerPizza
input.addEventListener("focus", limpiar)


