const logo = require("../../assets/logo.png");
const topo = require("../../assets/topo.png");

const tomate = require("../../assets/frutas/Tomate.png");
const brocolis = require("../../assets/frutas/Brócolis.png");
const batata = require("../../assets/frutas/Batata.png");
const pepino = require("../../assets/frutas/Pepino.png");
const abobora = require("../../assets/frutas/Abóbora.png");

const cesta = {
  topo: {
    titulo: "Detalhe da cesta",
    imagemTopoUrl: topo,
  },
  detalhes: {
    nome: "Cesta de Verduras",
    logoFazendaUrl: logo,
    nomeFazenda: "Jenny Jack Farm",
    descricao:
      "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    preco: "R$ 40,00",
    botao: "Comprar",
  },
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Tomate",
        imagem: tomate,
      },
      {
        nome: "Brócolis",
        imagem: brocolis,
      },
      {
        nome: "Batata",
        imagem: batata,
      },
      {
        nome: "Pepino",
        imagem: pepino,
      },
      {
        nome: "Abóbora",
        imagem: abobora,
      },
    ],
  },
};

export default cesta;
