import { Pessoa } from "./Pessoa.js"

export class Professor extends Pessoa{

    camadaPreferida:string
    alunos:Array<string>

    constructor(nome:string, idade:number, camadaPreferida:string, alunos:Array<string>){
        super(nome, idade)
        this.camadaPreferida = camadaPreferida
        this.alunos = alunos
    }

    exporPreferencias():string{
        return `Eu ${this.nome}, me identifico com ${this.camadaPreferida}.`
    }

    exporAlunos(){
        this.alunos.forEach(aluno => {
            console.warn(`O aluno(a) ${aluno} está presente`)
        });
    }

}