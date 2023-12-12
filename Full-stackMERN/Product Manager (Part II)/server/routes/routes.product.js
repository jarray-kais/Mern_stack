const  ProductController = require("../controllers/controller.product")


module.exports=(app)=>{
    
    app.get("/api/product", ProductController.FindAllProduct)
    app.get("/api/product/:id",ProductController.FindOneSingleProduct)
    app.post("/api/product", ProductController.CreatNewProduct)
    app.delete("/api/product", ProductController.deleteAll)
  
}