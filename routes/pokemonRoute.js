const express = require('express')
router = express.Router()
pokemonControllers = require("../controllers/pokemonControllers")

router.get("/pokemons", pokemonControllers.pokemonsController)
router.get("/pokemon", pokemonControllers.pokemonController)

module.exports = router