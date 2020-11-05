const mockdata = require("../static/mockdata");
const poketroller = {
  getAllPoke: (req, res) => {
    res.send(JSON.stringify(mockdata));
  },
  getOnePoke: (req, res) => {
    res.send(JSON.stringify(req.currentPokemon));
  },
  getOnePokesInfo: (req, res) => {
    //const currentMon = req.currentPokemon;
    const { id, info } = req.params
    if (info === "name") {
      res.status(200).send(req.currentPokemon[0].name)
    } else if (info === "type") {
      res.status(200).send(req.currentPokemon[0].type)
    } else if (info === "base") {
      res.status(200).send(req.currentPokemon[0].base)
    } else {
      return res.sendStatus(500);
    }
  },
};

module.exports = poketroller;
