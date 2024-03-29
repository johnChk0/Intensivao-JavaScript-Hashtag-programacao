const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCor= document.getElementById('nome-cor-selecionada');
const miniaturaImage0 = document.getElementById('0-imagem-miniatura');
const miniaturaImage1 = document.getElementById('1-imagem-miniatura');
const miniaturaImage2 = document.getElementById('2-imagem-miniatura');



const verdeCipreste = { // n0
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
};

const azulInverno = { // n1
    nome:'Azul-inverno',
    pasta: 'imagens-azul-inverno'
};

const meiaNoite = { // n2
    nome: 'Meia-Noite',
    pasta: 'imagens-meia-noite'
};

const estelar = { // n3
    nome: 'Estelar',
    pasta: 'imagens-estelar'
};

const rosaClaro = { //n4
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro]
const opcoesTamanho= ['41 mm', '45 mm'];

// Comentario
let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src= './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada+ '.jpeg';
}

//Selecionar e trocar o tamanho de imagem
function trocarTamanho() {
    //atualizar variavel de controle do tamanho da caixa
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);

    //Mudar o tamanho da imagem de acordo com a opção
    if (opcoesTamanho[tamanhoSelecionado] === '41 mm'){
        imagemVisualizacao.classList.add('caixa-pequena')
    }else{
        imagemVisualizacao.classList.remove('caixa-pequena')
    }

        //mudar o titulo do produto
        tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
}



function trocarCor(){
    //Atualizar cor selecionada
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    //Trocar titulo da Pagina
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    //Trocar nome da cor
    nomeCor.innerText ="Cor - " + opcoesCores[corSelecionada].nome;
    //Trocar imagens das miniaturas exibidas
    miniaturaImage0.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg';
    miniaturaImage1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg';
    miniaturaImage2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg';
    //Trocar imagem de vsualização
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
}



