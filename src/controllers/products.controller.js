const ProductsModel = require('../models/products.model')
const Products = require('../models/products.model')

exports.getProductsList = (req,res)=> {
    // console.log('Here are all the products')
    ProductsModel.getAllProducts((err,buyproducts) => {
        // console.log('We are here..')
        if(err)
        res.send(err)
        console.log('Buyproducts',buyproducts)
        res.send(buyproducts)
    })
}

exports.getProductByID = (req,res)=> {
    // console.log('Its working..')
    ProductsModel.getProductByID( req.params.id, (err,buyproducts) => {
        if(err)
        res.send(err)
        console.log('Single product data',buyproducts)
        res.send(buyproducts)
    })
}

exports.addNewProduct = (req,res) => {
    const productReqData = new ProductsModel(req.body)  
    console.log('productReqData', productReqData)
    //checking for null
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.send(400).send({success:false,message:'Please fill all fields'})
    }
    else{
        ProductsModel.addNewProduct(productReqData, (err,buyproducts) => {
            if(err)
            res.send(err)
            res.json({status:true,message:'Product successfully added', data:buyproducts.insertId})
        })
    }
}


exports.updateProduct = (req,res) => {
    const productReqData = new ProductsModel(req.body)  
    console.log('productReqData update', productReqData)
    //checking for null
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.send(400).send({success:false,message:'Please fill all fields'})
    }
    else{
        ProductsModel.updateProduct(req.params.id,productReqData, (err,buyproducts) => {
            if(err)
            res.send(err)
            res.json({status:true,message:'Product successfully updated'})
        })
    }
}

exports.deleteProduct = (req,res) => {
    ProductsModel.deleteProduct(req.params.id,(err,buyProducts)=> {
        if(err)
        res.send(err)
        res.json({status:true,message:'Product successfully deleted'})
    })
}
