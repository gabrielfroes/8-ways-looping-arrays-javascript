const sobremesas = [{
        nome: 'pudim',
        diet: true,
    },
    {
        nome: 'gelatina',
        diet: false,
    },
    {
        nome: 'bolo de chocolate',
        diet: false,
    },
    {
        nome: 'pavê',
        diet: true,
    },
];

const isDiet = item => item.diet
const sobremesa = sobremesas.find(isDiet);
console.log(sobremesa)