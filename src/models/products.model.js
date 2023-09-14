var dbConn = require('../../config/db.config')

var Products = function(products) {
    this.name = products.name;
    this.quantity = products.quantity;
    this.type = products.type;
    this.price = products.price;
    this.status = products.status ? products.status : 1 ;
    this.created_at = new Date();
    this.updated_at = new Date();
}

Products.getAllProducts = (result) => {
    dbConn.query('SELECT * FROM buyproducts', (err,res)=>{
        if(err){
            console.log('Error while fetching products',err)
            result(null,err)
        }else{
            console.log('Employees fetched successfully')
            result(null,res)
        }
    })
}

Products.getProductByID = (id,result) => {
    dbConn.query('SELECT * FROM buyproducts WHERE id=?', id , (err,res) => {
        if(err){
            console.log('Error while fetching employee by ID')
            result(null,err)
        }else {
            console.log('Employee fetched successfully by ID')
            result(null,res)
        }
    })
}

Products.addNewProduct = (productReqData,result) => {
    dbConn.query('INSERT INTO buyproducts SET ?', productReqData,(err,res) => {
        if(err){
            console.log('Error while insering new data')
            result(null,err)
        }else {
            console.log('Product sucessfully added')
            result(null,res)
        }
    })
}

Products.updateProduct = (id,productReqData, result) => {
    dbConn.query('UPDATE buyproducts SET name=?,quantity=?,type=?,price=?,status=? WHERE id=?', 
    [productReqData.name,productReqData.quantity,productReqData.type,productReqData.price,productReqData.status,id],
     (err,res)=> {
        if(err){
            console.log('Error while updating the product')
            result(null,err)
        }else {
            console.log('Product updated successfully')
            result(null,res)
        }
    })
}

Products.deleteProduct = (id, productReqData, result) => {
    // dbConn.query('DELETE FROM buyproducts WHERE id=?', [id] , (err,res)=> {
    //     if(err){
    //         console.log('Error while deleting employee')
    //         result(null,err)
    //     } else {
    //         console.log('Product successfully deleted')
    //         result(null,res)
    //     }
    // })
    dbConn.query('UPDATE buyproducts SET is_deleted=? WHERE id=?', [1,id], (err,res) => {
        if(err){
            console.log('Error while deleting product')
            result(null,err)
        } else {
            console.log('Product successfully deleted')
            result(null,res)
        }
    })
}

module.exports = Products