const  ProductController = require("../controllers/controller.product")


module.exports=(app)=>{
    app.post("/api/product", ProductController.CreatNewProduct)
    app.get("/api/product", ProductController.FindAllProduct)
    app.delete("/api/product", ProductController.deleteAll)

}