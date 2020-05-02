const familia = [{
        nome: 'Gabriel',
        papel: 'pai'
    },
    {
        nome: 'Vanessa',
        papel: 'mae'
    },
    {
        nome: 'Gabriel',
        papel: 'filho'
    },
    {
        nome: 'Felipe',
        papel: 'filho'
    },
]

for (let pessoa in familia) {
    console.log(familia[pessoa])
}