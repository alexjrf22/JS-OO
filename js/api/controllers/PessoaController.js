import {Pessoa} from '../models/Pessoa.js'

export class PessoaController
{
    _inputNome
    _inputIdade
    _inputPeso
    _inputAltura

    constructor()
    {
        this._inputNome = document.querySelector("#nome")
        this._inputIdade = document.querySelector("#idade")
        this._inputPeso = document.querySelector('#peso')
        this._inputAltura = document.querySelector("#altura")
        
    }

    adiciona(event){
        
        event.preventDefault()
        this._criaPessoa()
        console.log(this._criaPessoa())
    }

    _criaPessoa()
    {
        return new Pessoa(
            this._inputNome.value,
            this._inputIdade.value,
            this._inputPeso.value,
            this._inputAltura.value
        )
    }

    _limpaForm()
    {
        this._inputNome.value = ''
        this._inputIdade.value = ''
        this._inputPeso.value = ''
        this._inputAltura.value = ''
        
        this._inputNome.focus()
    }
}