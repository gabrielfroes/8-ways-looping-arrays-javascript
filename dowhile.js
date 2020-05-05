const bolsaVanessa = [
    'cartão de crédito',
    'chaves',
    'dinheiro',
    'escova de cabelo',
    'lenço de papel',
    'perfume',
    'alcool gel'
]

let index = 0
do {
    console.log(`${index + 1}. ${bolsaVanessa[index]}`)
    index++
}
while (index < bolsaVanessa.length)