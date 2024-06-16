
import { PessoaController } from "./controllers/PessoaController.js"


let pessoaController = new PessoaController()
let form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    pessoaController.adiciona(event)
    pessoaController._limpaForm()
})

