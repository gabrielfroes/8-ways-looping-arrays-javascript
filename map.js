const temperaturaCelsius = [0, 22, 31, 40, 45, 12, 3]
const toFahrenheit = value => ((value * 9) / 5) + 32
const temperaturaFahrneheit = temperaturaCelsius.map(toFahrenheit)

console.log(temperaturaCelsius)
console.log(temperaturaFahrneheit)