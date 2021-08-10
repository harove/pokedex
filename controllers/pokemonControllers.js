const axios = require('axios')

exports.pokemonsController = async (req,res)=>{
    const pokemons = await axios.get("https://pokeapi.co/api/v2/pokemon")
    res.send(pokemons.data)
}

exports.pokemonController = (req,res)=>{
    res.json({
        name:"Alex"
    })
}
