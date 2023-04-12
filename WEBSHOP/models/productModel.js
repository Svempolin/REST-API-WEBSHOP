
const Product= require('../schemas/productSchema')

exports.createNewProduct = async(req, res) => {
    const {name, description, price, imageURL} = req.body;

   const product = await  Product.create({name, description, price, imageURL})

if (!product){
    return res.status(500).json({
        message: "data bas error could not create post"
    })
  
}
res.status(201).json(product)


}

exports.getProducts = async (req, res) => {
    try {
    const product = await Product.find()
    res.status(200).json(product)
        
    } catch (error) {
    res.status(500).json({
        message:'somthing went wrong fetching the product'
    })
        
    }
}

exports.getProductsById = async (req, res) => {
    try {
    const product = await Product.findById(req.params.id)
    res.status(200).json(product)
        
    } catch (error) {
    res.status(500).json({
        message:'somthing went wrong fetching one product'
    })
        
    }
}

exports.updateProducts =  (req, res) => {
  const {name, description, price, imageURL} = req.body;
  if(!name || !description|| !price|| !imageURL){
    res.status(400).json({
        message: 'you need to enter a new name, description, price and imgURL'
    })
    return
  }
  Product.findByIdAndUpdate(req.parms.id, {name, description, price, imageURL}, {new:true})
  .then(product => {
    if(!product){
        res.status(400).json({
            message:'could not find that product'
        })
        return
    }
    res.status(200).json(product)
  })
  .catch(err=> {
    res.status(500).json({
        message:'Somthing went wrong uppdateing the product ',
        err: err.message
    })
  })
}

exports.deleteProduct = (req ,res) => {
 Product.findByIdAndDelete(req.params.id)
 .then(product => {
    if(!product){
        res.status(404).json({
            message:'could not find that product' 
        })
        return
    }
    res.status(200).json({id: product._id})
 })
 .catch(err => {
    res.status(500).json({
      message: 'Something went wrong when deleting the product ',
      err: err.message
    })
  })

}



