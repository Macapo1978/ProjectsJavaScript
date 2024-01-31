const searchButton = document.getElementById("search-button");

//https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/{name-or-id}

const fetchData = async () => {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    let endPoint = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon"
    try {
        if(searchInput){
            endPoint += `/${searchInput}`
            const res = await fetch(endPoint);
            const data = await res.json();
            if(data){
                showData(data)
            }else{
                alert("Pokémon not found")
            }
        }
    }
    catch(err){
        console.log(err)
    }
}

const showData = (data) => {
    const {id, name, height, sprites, weight, stats} = data;
    const {front_default} = sprites
    const pokemonName = document.getElementById("pokemon-name")
    const pokemonId = document.getElementById("pokemon-id")
    const weightData = document.getElementById("weight")
    const heightData = document.getElementById("height")
    const types = document.getElementById("types")
    const spriteContainer = document.getElementById("sprite-container")

    pokemonName.textContent = `${name.toUpperCase()}`
    pokemonId.textContent = `#${id}`
    weightData.textContent = `Weight: ${weight}`
    heightData.textContent = `Height: ${height}`
    spriteContainer.innerHTML = `<img id="sprite" src="${front_default}">`
    
    const arrStats = stats.map((item) => item.base_stat)
    const hp = document.getElementById("hp")
    hp.textContent = arrStats[0]
    
}

searchButton.addEventListener("click", fetchData)