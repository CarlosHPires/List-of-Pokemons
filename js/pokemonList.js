window.onload = init;

function init() {
    var button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
    loadPokemonList();
}

function handleButtonClick() {
    var textInput = document.getElementById("pokemonTextInput");
    var pokemonName = textInput.value;
    var li = document.createElement("li");
    li.innerHTML = pokemonName;

    var ul = document.getElementById("list");
    ul.appendChild(li);
    
    if (pokemonName == "") {
        alert("Please enter a pokémon");
    } else {
        alert("Adding " + pokemonName);
        save(pokemonName);
    }
}