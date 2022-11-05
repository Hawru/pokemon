const fs = require("fs");
const Lista = require("../database/pokemon.json")

const mainController = {
    index: (req, res) => {
        res.render("index.ejs", {pokemon: Lista})
    }
}

module.exports = mainController;