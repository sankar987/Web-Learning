function convertTemperature(celsius) {
    return (celsius * 9/5) + 32;
}

let currentCelsius = 25;
let fahrenheit = convertTemperature(currentCelsius);

console.log(currentCelsius + "°C is equal to " + fahrenheit + "°F");