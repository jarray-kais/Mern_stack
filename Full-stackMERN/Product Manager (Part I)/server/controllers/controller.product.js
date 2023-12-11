const Products = require("../models/model.product")

module.exports.CreatNewProduct=(req,res)=>{
    Products.create(req.body)
    .then(CreateProduct=>{
        res.json({newProduct : CreateProduct})
    })
    .catch(err => { res.json({ message: "Wait a minute 🙄🙄",err}) })
}
module.exports.FindAllProduct = (req, res) => {
    Products.find()
        .then((result) => {
            console.log(result)
            res.json(result)
        })

    }
    module.exports.deleteAll = (req, res) => {
        Products.deleteMany()
            .then(result => {
                res.json(result)
            })
            .catch((err) => {
                res.json(err)
            })
    }