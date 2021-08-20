function save(item) {
    var listPokemonArray = getStorearray("list");
    listPokemonArray.push(item);
    localStorage.setItem("list", JSON.stringify(listPokemonArray));
}

function loadPokemonList() {
    var listPokemonArray = getSavedPokemons();
    var ul = document.getElementById("list");
    if (listPokemonArray != null) {
        for (var i = 0; i < listPokemonArray.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = listPokemonArray[i];
            ul.appendChild(li);
        }
    }
}

function getSavedPokemons() {
    return getStorearray("list");
}

function getStorearray(key) {
    var listPokemonArray = localStorage.getItem(key);
    if (listPokemonArray == null || listPokemonArray == "") {
        listPokemonArray = new Array();
    } else {
        listPokemonArray = JSON.parse(listPokemonArray);
    }
    return listPokemonArray;
}