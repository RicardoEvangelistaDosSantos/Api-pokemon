//Função para pesquisar dados sobre um pokemon.
function search() {
    const dados = document.getElementById('search');
    const pokemon = document.getElementById('pokemon').value.toLowerCase();
    const listaHabilidades = [];
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => {
        if (!response.ok || pokemon == "") {
            dados.innerHTML = `${pokemon} não existe ou não encontrado!`;
        } else {
            return response.json(); // Corrigido para usar 'return'
        }
    })
    .then(data => {
        dados.innerHTML = `Nome: ${data.name}<br>Altura: ${data.height}<br>Peso: ${data.weight}<br>Habilidades:`;
        data.abilities.forEach(ability => {
            habilidade = `${ability.ability.name}`; 
            listaHabilidades.push(habilidade);
        });
        for (item of listaHabilidades) {
            let li = document.createElement("li");
            li.textContent = item;
            document.getElementById("habilidades").appendChild(li);
        }
    });
}


//Função para listar 10 pokemons.
let listaPokemon = []
function listPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(response => response.json())
    .then(data => {
        data.results.forEach(pokemon => {
            pokemon = `${pokemon.name}`;
            listaPokemon.push(pokemon);
        });
    for (item of listaPokemon) {
        let li = document.createElement("li");
        li.textContent = item;
        document.getElementById("list").appendChild(li);
    }
    });
};

//Gerar um pokemon aleatório.
function randomPokemon() {
    const element = document.getElementById('element');
    let id = Math.floor(Math.random() * 100) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => {
        element.innerHTML = `Nome: ${data.name} <br>Altura: ${data.height}
            <br>Peso: ${data.weight}<br> <img src="${data.sprites.front_default}" alt="${data.name}"></img>`
    });
};