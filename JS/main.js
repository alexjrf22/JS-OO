import { Pessoa } from "./Pessoa.js"

let pessoa = new Pessoa('Alexandre', 38, 65, 1.65)
let pessoa2 = new Pessoa('Batata', 22, 200, 1.80)


console.log(pessoa)
console.log(pessoa.classificaImc())
console.log(pessoa2)
console.log(pessoa2.classificaImc())
