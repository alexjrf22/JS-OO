export class Pessoa
{

    _nome
    _idade
    _peso
    _altura
    _imc
    static totalPessoas = 0

    constructor (nome, idade, peso, altura)
    {
        this._nome = nome
        this._idade = idade
        this._peso = peso
        this._altura = altura
        this._imc = this._peso / (this._altura * this._altura)
        Pessoa.totalPessoas += 1
        
    }

    calcularImc()
    {
        return (this._peso / (this._altura * this._altura)).toFixed(2)
    }

    classificaImc()
    {
        let imc = (this._imc).toFixed(2)
        let classificacao = ''

        if(imc < 18.5){
            classificacao = 'Abaixo do peso'
        }else if(imc <= 24.9){
            classificacao = 'Peso normal'
        }else if(imc <= 29.9){
            classificacao = 'Sobrepeso'
        }else if(imc <= 34.9){
            classificacao = 'Obesidade grau I'
        }else if(imc <= 39.9){
            classificacao = 'Obesidade grau II'
        }else if(imc >= 40){
            classificacao = 'Obesidade grau III'
        }else{
            classificacao = 'Peso inválido'
        }

        return classificacao

    }

    set nome(nome)
    {
        this._nome = nome
    }

    set idade(idade)
    {
        this._idade = idade
    }

    set peso(peso)
    {
        this._peso = peso
    }

    set altura(altura)
    {
        this._altura = altura
    }

    get nome()
    {
        return this._nome
    }

    get idade()
    {
        return this._idade
    }

    get peso()
    {
        this._peso
    }

    get altura()
    {
        return this._altura
    }

    get imc()
    {
        return this._imc
    }

    get totalPessoas()
    {
        return Pessoa.totalPessoas
    }


}

