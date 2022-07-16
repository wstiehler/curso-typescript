import { Aluno } from "./Aluno.js";
import { Pessoa } from "./Pessoa.js"
import { Professor } from "./Professor.js";

let nome:string = "William"

let pessoa1 = new Pessoa("William", 21)
pessoa1.altura = 1.80

console.log("Pessoa 1 =>", pessoa1);
console.log("Pessoa 1 +>", pessoa1.apresentar());


let aluno1 = new Aluno("Fulano", 18, "banco de dados", ["golang", "java script", "type script", "html"])

console.log(aluno1.apresentar())
console.log(aluno1.exporPreferencias())
console.table(aluno1.listarHabilidades())

let professor1 = new Professor("Professor", 33, "java", ["William", "Rafael", "Matheus"])

console.log(professor1.apresentar())
console.log(professor1.exporPreferencias())
console.log(professor1.verificarMaiorIdade()?"É de maior":"É de menor")
professor1.exporAlunos()

let professores:Array<Professor> = new Array<Professor>()

professores.push(professor1)
professores.push(new Professor("Rubem", 33, "java", ["William", "Rafael", "Matheus"]))