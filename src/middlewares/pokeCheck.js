const mockdata = require('../static/mockdata')

const pokeCheck = {
    pokeValidation:(req, res, next) => {
        const { id } = req.params;
        
        const pokemon = mockdata.filter((el) => el.id === parseInt(id,10));
        if (!pokemon.length) {
            return res.sendStatus(404)
        }
        req.currentPokemon = pokemon;
        next();
    }
}


module.exports = pokeCheck;