const router = require('express').Router();
const {createNewProduct, getProducts, getProductsById, updateProducts, deleteProduct} = require('../models/productModel')


// CREATE NEW PRODUKT 
router.post('/', createNewProduct)


// GET NEW PRODUKT 
router.get('/', getProducts)
router.get('/:id', getProductsById)


// UPDATE PRODUCT 
router.put('/:id', updateProducts)

router.delete('/:id', deleteProduct)

module.exports = router;