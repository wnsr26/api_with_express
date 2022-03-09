exports.getProducts = async (req,res)=>{
    res.send(`get all products`);
}

exports.getProductID = async (req, res)=>{
    res.send(`get from id : ${req.params.id}`)
}

exports.getProductName = async (req, res)=>{
    res.send(`get by name : ${req.params.name}`)
}

exports.getProductPrice = async (req, res)=>{
    res.send(`get by price : ${req.params.price}`)
}

exports.addProduct = async (req, res)=>{
    console.log(req.body.id);
    console.log(req.body.name);
    res.send("add a product");
}

exports.editProduct = async (req, res)=>{
    res.send(`edit by id : ${req.params.id}`)
}

exports.deleteProduct = async (req, res)=>{
    res.send(`delete by id : ${req.params.id}`)
}

