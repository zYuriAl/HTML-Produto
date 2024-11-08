// Array para armazenar os produtos
let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

//Função para exibir os produtos na vitrine
function exibirProdutos() {
    const vitrine = document.getElementById('vitrine');
    if (vitrine) {
        vitrine.innerHTML = '';
        produtos.array.forEach(produto => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <h2>${produto.nome}</h2>
                <p>${produto.descricao}</p>
                <p>Valor: R$${produto.valor}</p>
            `;    
        });
    }
}

// Função para cadastrar um novo produto
const formCadastro = document.getElementById('form-cadastro');
if (formCadastro) {
    formCadastro.addEventListener('submit' , (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const descricao = document.getElementById('descricao').value;
        const valor = document.getElementById('valor').value;
        const novoProduto = { nome, descricao, valor };
        produtos.push(novoProduto);
        localStorage.setItem('produtos', JSON.stringify(produtos));
        alert('Produto cadastrado com sucesso!');
        formCadastro.reset();
        window.location.href = 'index.html';
    })
}

// Função para listar todos os produtos
function listarProdutos(){
    const listaProdutos = document.getElementById('lista-produtos');
    if (listaProdutos) {
        listaProdutos.innerHTML = '';
        produtos.forEach((produto, index) => {
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `
                <h2>${produto.nome}</h2>
                <p>${produto.descricao}</p>
                <p>Valor: R$${produto.descricao}</p>
                <button onclick="editarProduto(${index})">Editar</button>
                <button onclick="deletarProduto(${index})">Deletar</button>
            `;
            listaProdutos.appendChild(productDiv);    
        });
    }
}

// Função para editar um produto
function editarProduto(index) {
    const produto = produtos[index];
    const nome = prompt('nome:', produto.nome);
    const descricao = prompt('Descrição:', produto.descricao);
    const valor = prompt('produtos', JSON.stringify(produtos));
    listarProdutos();
    listarProdutos();
}

// Função para deletar um produto
function deletarProduto(index) {
    produtos.splice(index, 1);
    localStorage.setItem('produtos', JSON.stringify(produtos));
    listarProdutos();
    exibirProdutos();
}

//Inicialização
window.onload = () => {
    exibirProdutos();
    listarProdutos();
}