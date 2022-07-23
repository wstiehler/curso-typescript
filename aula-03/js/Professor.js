import { Pessoa } from "./Pessoa.js";
export class Professor extends Pessoa {
    constructor(nome, idade, camadaPreferida, alunos) {
        super(nome, idade);
        this.camadaPreferida = camadaPreferida;
        this.alunos = alunos;
    }
    exporPreferencias() {
        return `Eu ${this.nome}, me identifico com ${this.camadaPreferida}.`;
    }
    exporAlunos() {
        this.alunos.forEach(aluno => {
            console.warn(`O aluno(a) ${aluno} está presente`);
        });
    }
}
