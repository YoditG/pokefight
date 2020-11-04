const mockdata = require("../static/mockdata");
const poketroller = {
  getAllPoke: (req, res) => {
    res.send(JSON.stringify(mockdata));
  },
  getOnePoke: (req, res) => {
    
    res.send(req.currentPokemon);
  },
};

module.exports = poketroller;
