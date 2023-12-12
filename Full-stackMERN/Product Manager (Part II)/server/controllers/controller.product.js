const Products = require("../models/model.product")

module.exports.CreatNewProduct=(req,res)=>{
    Products.create(req.body)
    .then(CreateProduct=>{
        res.json({newProduct : CreateProduct})
    })
    .catch(err => {
        res.status(400).json(err)
    })
}
module.exports.FindAllProduct = (req, res) => {
    Products.find()
        .then((result) => {
            console.log(result)
            res.json(result)
        })

    }
    module.exports.FindOneSingleProduct = (req, res) => {
        Products.findOne({ _id: req.params.id })
            .then(oneSingleProduct => {
                res.json(oneSingleProduct)
            })
            .catch(err => {
                res.status(400).json(err)
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