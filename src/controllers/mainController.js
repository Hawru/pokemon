const fs = require("fs");
const Lista = require("../database/pokemon.json")

const mainController = {
    index: (req, res) => {
        console.log(Lista[1].base["Sp. Attack"])
        res.render("index.ejs", {pokemon: Lista})
    }
}

module.exports = mainController;