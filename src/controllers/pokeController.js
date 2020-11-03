const mockdata = require('../static/mockdata')
const poketroller = {
    getAllPoke: (req,res)=>{
        res.send(JSON.stringify(mockdata))
    }

}

module.exports = poketroller;