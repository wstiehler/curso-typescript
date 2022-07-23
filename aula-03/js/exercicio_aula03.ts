import { Aluno } from "./Aluno.js";


let alunos: Array<Aluno> = new Array<Aluno>()

console.log("Quando a pagina carregou a lista estava assim:", alunos);

alunos.push(new Aluno("fulano", 40, "Java", ["Java, Golang, Python"]))
alunos.push(new Aluno("Zé", 34, "Front", ["Html, Css, Java"]))
alunos.push(new Aluno("Fillipi", 15, "Design", ["Figma, CorelDraw, Paint"]))

gerarTabela()

function gerarTabela() {
    $("tbody").empty()

    alunos.forEach(aluno => {
        $("tbody").append(
            $("<tr>").append(
                $("<td>", { text: aluno.nome }),
                $("<td>", { text: aluno.idade }),
                $("<td>", { text: aluno.camadaPreferida }),
                $("<td>", { text: aluno.linguagens }),
                $("<td>").append(
                    $("<button>", {
                        class: "btn btn-danger btn-sm",
                        text: "Exluir",
                        click: function () {
                            alunos.splice(alunos.indexOf(aluno), 1);
                            gerarTabela();
                        }
                    })
                ),
            )
        )
    });
}

$("form").on("submit", function (event) {
    event.preventDefault();

    let nome:string = String($("#nome").val())
    let idade:number = Number($("#idade").val())
    let camada:string = String($("#camadaPreferida").val())
    let linguagens:Array<string> = String($("#linguagens").val()).split(',')

    console.log(nome, idade, camada, linguagens)

    alunos.push(new Aluno(nome, idade, camada, linguagens))

    gerarTabela()

    $("input").val('')

})