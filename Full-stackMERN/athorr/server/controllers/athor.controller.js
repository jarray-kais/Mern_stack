const Athor = require("../models/model.athor")



//? Read All

module.exports.FindAllAthor = (req, res) => {
    
    Athor.find()
        .then((result) => {
            console.log(result)
            res.json(result)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

//create New

module.exports.CreatNewAthor=(req,res)=>{
    Athor.create(req.body)
    .then(CreateAthor=>{
        res.json({newAthor : CreateAthor})
    })
    .catch(err => {
        res.status(400).json(err)
    })
}
//delete one

module.exports.deleteOneAthor = (req, res) => {
    Athor.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}
//update

module.exports.updateExistingAthor = (req, res) => {
   Athor.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(result => {
            res.json({ "done": result })
        })
        .catch(err => {
            res.status(400).json(err)
        })

}