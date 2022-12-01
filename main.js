const Pizzas = [
    {
        id: 1,
        nombre: 'Muzzarella',
        ingredientes: ['Queso', 'Oregano'],
        precio: 1000,
        img: './img/muzza.jpg'
    },
    {
        id: 2,
        nombre: 'Especial',
        ingredientes: ['Queso', 'Jamon'],
        precio: 1200,
        img: './img/especial.jpg'
    },
    {
        id: 3,
        nombre: 'Napolitana',
        ingredientes: ['Queso', 'Tomate', 'Oregano'],
        precio: 1600,
        img: './img/napo.jpg'
    },
    {
        id: 4,
        nombre: 'Anana',
        ingredientes: ['Jamon Crudo', 'Anana'],
        precio: 1800,
        img: './img/anana.jpg'
    },
    {
        id: 5,
        nombre: 'Pollo',
        ingredientes: ['Queso', 'Jamon', 'Pollo'],
        precio: 1650,
        img: './img/pollo.jpg'
    },
    {
        id: 6,
        nombre: 'Calabresa',
        ingredientes: ['Queso', 'Salamin'],
        precio: 1400,
        img: './img/calabresa.jpg'
    },
]

let error = '';
const barra = '----------------------'

const boton = document.getElementById("btn-obtener")
const input = document.getElementById("id_pizza")
const card = document.querySelector(".card_pizza")
const form = document.querySelector(".form")

console.log(boton)
console.log(input)
console.log(card)

console.log(form)


const obtenerPizza = (event)  => {
    event.preventDefault();

    const existePizza = Pizzas.find(pizza => pizza.id === parseInt(input.value));

    if (!existePizza) {
        card.innerHTML =
            `<div id="container">
                <h2 id="pizza">No se encuentra la pizza.</h2>
                <p id="ingredientes"></p>
                <h3 id="precio_error"></h3>
                <img id="img_pizza" src="" alt="">
            </div>`
            return;
        }
        
    
    card.innerHTML =
            `<div id="container">
                <h2 id="pizza">La pizza es ${existePizza.nombre}</h2>
                <p id="ingredientes">Los ingredientes son: ${existePizza.ingredientes}</p>
                <h3 id="precio_error">El precio es $ ${existePizza.precio}</h3>
                <img id="img_pizza" src="${existePizza.img}" alt="">
            </div>`;

}

form.onsubmit = obtenerPizza



