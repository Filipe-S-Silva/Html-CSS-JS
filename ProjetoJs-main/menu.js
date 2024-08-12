/*  0 - sair
 1 - cadastrar filme
 2 - listar filme
 3 - calcular média dos filmes
 4 - filtrar pelos filmes */
//continue - para a aplicação e volta do inicio
//prompt
let prompt = require('prompt-sync')();

//funções
function menu() {
    console.log(`
    CÓDIGO ======================= AÇÃO
    
     1   ===================== cadastrar
     2   ======================  listar
     3   ====================== calcular
     4   ======================  filtrar
     0   ======================   sair
    
    `);
}

function menuFiltro() {
    console.log(`
    1 - Filtrar por filmes assistidos;
    2 - Filtrar por filmes não assistidos;
    `)
}

//variaveis
const listaFilmes = [

    { nome: "BATMAN", notaIMDb: 10, notaRottenTomatoes: 10, assistiu: true },

    { nome: "NARUTO", notaIMDb: 7, notaRottenTomatoes: 5, assistiu: false },

    { nome: "UMA MENTE BRILHANTE", notaIMDb: 9.5, notaRottenTomatoes: 10, assistiu: false },

]
let escolha = Number();
let validacao = Boolean();
let resultado = "";

//usuario e mostrar

do {
    console.clear();
    menu();
    escolha = Number(prompt("Informe o código desejado: "));

    switch (escolha) {

        case 0:
            console.clear();

            console.log("saindo...");

            prompt("Aperte enter para continuar.........")
            console.clear();

            console.log("Programa encerrado........");
            break;

        case 1:
            console.clear();

            console.log("---------  CADASTRAR FILME  ---------")
            console.log("\n")

            let nomeDigitado = prompt("Informe o nome do filme: ")
            nomeDigitado = nomeDigitado.toUpperCase();
            const notaIMDbDigitado = Number(prompt("Informe a nota do IMDb do filme: "))
            const notaRottenTomatoesDigitado = Number(prompt("Informe a nota do Rotten Tomatoes do filme: "))
            let assistiuDigitado;
            do {

                assistiuDigitado = prompt("Já assistiu o filme? ")
                assistiuDigitado = assistiuDigitado.toUpperCase().charAt(0);

                if (assistiuDigitado === "S") {

                    assistiuDigitado = true
                    validacao = true;

                } else if (assistiuDigitado === "N") {

                    assistiuDigitado = false
                    validacao = true;

                } else {

                    console.error("Código inválido\nTente novamente")
                    validacao = false;

                }

            } while (validacao === false);

            const novoFilme = {
                nome: nomeDigitado,
                notaIMDb: notaIMDbDigitado,
                notaRottenTomatoes: notaRottenTomatoesDigitado,
                assistiu: assistiuDigitado
            }

            listaFilmes.push(novoFilme) //colocar um array dentro de um objeto


            console.log("Filme cadastrado");
            prompt("Aperte enter para continuar.....")
            console.clear();
            break;

        case 2:
            console.clear();

            console.log("--------  LISTA DE FILMES  ----------\n")
            //console.table(listaFilmes)

            for (const i of listaFilmes) {
                console.log("Nome do filme: ", i.nome);
                console.log("Nota IMDb: ", i.notaIMDb);
                console.log("Nota Rotten Tomatoes: ", i.notaRottenTomatoes);

                if (i.assistiu === true) {
                    resultado = "SIM";
                } else {
                    resultado = "NÃO";
                }
                console.log("Assistido: ", resultado);

                console.log("\n");
            }

            prompt("Aperte enter para continuar.......")
            console.clear();
            break;

        case 3:
            console.clear();

            console.log("--------  CALCULAR MÉDIA  --------\n");

            console.log("=== FILMES DISPONIVEIS ===")

            let contador = Number(1)
            for (const item of listaFilmes) {
                console.log(contador, ".", item.nome);
                contador++;
            }
            console.log("\n");

            let nomeFilmeDesejado = prompt("Informe o nome do filme desejado: ")
            nomeFilmeDesejado = nomeFilmeDesejado.toUpperCase();
            prompt("Digite enter para continuar....")

            console.clear();

            for (let filmeProcurado of listaFilmes) {

                if (filmeProcurado.nome === nomeFilmeDesejado) {

                    const media = (filmeProcurado.notaIMDb + filmeProcurado.notaRottenTomatoes) / 2;

                    console.log("Filme desejado: ", filmeProcurado.nome);
                    console.log("Nota IMDb: ", filmeProcurado.notaIMDb);
                    console.log("Nota Rotten Tomatoes: ", filmeProcurado.notaRottenTomatoes);
                    console.log("Média: ", media);

                    break;

                }
            }

            prompt("Aperte enter para continuar.......");
            console.clear();
            break;

        case 4:
            console.clear();

            do {
                console.log("----------  FILTRO FILME  -----------\n")
                menuFiltro();
                let filtro = Number(prompt("Informe o código desejado: "));

                switch (filtro) {
                    case 1:
                        console.clear();

                        validacao = true;

                        console.log("=== FILMES ASSISTIDOS ===");

                        for (let filme of listaFilmes) {
                            if (filme.assistiu === true) {
                                console.log("Nome do filme: ", filme.nome);
                                console.log("Nota IMDb: ", filme.notaIMDb);
                                console.log("Nota Rotten Tomatoes: ", filme.notaRottenTomatoes);
                                console.log("\n");
                            }
                        }

                        prompt("Aperte enter para continuar......")
                        console.clear();

                        break;

                    case 2:
                        console.clear();

                        validacao = true;

                        console.log("====== FILMES NÃO ASSISTIDOS =====");

                        for (let filme of listaFilmes) {
                            if (filme.assistiu === false) {
                                console.log("Nome do filme: ", filme.nome);
                                console.log("Nota IMDb: ", filme.notaIMDb);
                                console.log("Nota Rotten Tomatoes: ", filme.notaRottenTomatoes);
                                console.log("\n");
                            }
                        }

                        prompt("Aperte enter para continuar......")
                        console.clear();

                        break;

                    default:

                        console.error("Código inválido\nTente novamente");

                        validacao = false;

                        prompt("Aperte enter para continuar......")
                        console.clear();

                        break;

                        prompt("Aperte enter para continuar......")
                        console.clear();

                }

            } while (validacao === false);


            prompt("Aperte enter para continuar.......")
            console.clear();
            break;

        default:
            console.clear();

            console.error("Código inválido");

            prompt("Aperte enter para continuar.......")
            console.clear();
            break;

    }

} while (escolha != 0)