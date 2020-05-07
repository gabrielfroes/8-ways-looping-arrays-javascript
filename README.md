
# 8 Formas de usar Looping em Arrays no JavaScript 

# 1. For 
> A instrução for cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.
#### Syntax
```javascript
for (let i = 0; condição; i++) {
  declaração
}  
```



# 2. While
> A declaração while cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução da rotina.
#### Syntax
```javascript
while (condição) {
  rotina
}
``` 

# 3. ForEach
> O forEach executa o callback fornecido uma vez para cada elemento da ordem com um valor atribuido. Ele não é invocado para propriedades de índices que foram deletados ou que não foram inicializados (por ex. em arrays esparsos).

```javascript
array.forEach(function(element, index) {
declaração
})
```

> Obs: O seu return é sempre undefined

# 4. Map
> O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

#### Sintaxe
```javascript
array.map(function(element, index) {
declaração
})
```

# 5. Filter
> O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

#### Sintaxe
```javascript
let newArray = array.filter(function(element, index) {
declaração
})
```

# 6. Reduce  
> O método reduce() executa uma função redutor (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

> O valor de retorno da sua função reducer é atribuída ao acumulador. O acumulador, com seu valor atualizado, é repassado para cada iteração subsequente pelo array, que por fim, se tornará o valor resultante, único, final.

#### Sintaxe
```javascript
array.reduce(function(acumulador, valorAtual) {
  declaração
}, valorInicial)
```

## parâmetros
##### function
> é executada em cada valor no array (exceto no primeiro, se nenhum valorInicial for passado); recebe quatro argumentos:
##### acumulador
> O valor retornado na última invocação do callback, ou o argumento valorInicial, se fornecido (exemplo abaixo).
##### valorAtual
> O elemento atual que está sendo processado no array.
##### valorInicial  
> Opcional. Valor a ser usado como o primeiro argumento da primeira chamada da função callback. Se nenhum valorInicial é fornecido, o primeiro elemento do array será usado como o valor inicial do acumulador e o valorAtual não será lido. Chamar reduce() em uma array vazia sem valor inicial retornará um erro.

# 7. Every  
> O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida.

### Sintaxe
arr.every(callback[, thisArg])
```javascript
array.every(function(element) {
  declaração
})
```

#### Valor de retorno
>true se a função de callback retorna um valor truthy para cada um dos elementos do array; caso contrário, false.

# 8. Some
> O método some() testa se algum dos elementos no array passam no teste implementado pela função atribuída.

#### Sintaxe
```javascript
array.some(function(element) {
  declaração
})
```

> some() executa a função callback uma vez para cada elemento presente no array até achar um onde o callback retorne um valor true. Se em qualquer dos elementos o valor for encontrado, some() imediatamente retorna true. Caso contrario, some() retorna false.
