const idadeFamilia = [{
        nome: 'Vanessa',
        idade: 39
    },
    {
        nome: 'Gabriel',
        idade: 39
    },
    {
        nome: 'Bielzinho',
        idade: 11
    },
    {
        nome: 'Felipe',
        idade: 3
    },
]

const ehAdulto = valor => valor.idade >= 18
const somenteAdulto = idadeFamilia.every(ehAdulto)
console.log(somenteAdulto)