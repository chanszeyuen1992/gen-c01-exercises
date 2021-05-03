//Creat the Kelvin of today weather.
let kelvin = 400;

//convert Kelvin to celsius.
const celsius = kelvin - 273;

//convert Celsius to Fahrenheit.
let fahrenheit = celsius * (9 / 5) + 32;

//Round down the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//Convert Cesius to Newton.
const newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${newton} degrees Newton.`)