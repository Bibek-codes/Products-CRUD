

// const products = [
//     {
//         "product_id": 1,
//         "product_name": "Iphone",
//         "product_price": 999
//     },
//     {
//         "product_id": 2,
//         "product_name": "Adidas",
//         "product_price": 30
//     },
//     {
//         "product_id": 3,
//         "product_name": "Skybags",
//         "product_price": 25
//     },
//     {
//         "product_id": 4,
//         "product_name": "Samsung",
//         "product_price": 400
//     },
//     {
//         "product_id": 5,
//         "product_name": "JBL",
//         "product_price": 25
//     },
//     {
//         "product_id": 6,
//         "product_name": "Alienware",
//         "product_price": 1000
//     }
// ]

// app.get('/products',(req,res) => {
//     res.json(products)
// })

const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

app.get('/',(req,res)=> {
    res.send('Hello World')
})

const productsRoutes = require('./src/routes/products.route')

app.use('/api/v1/products',productsRoutes)

app.listen(port,()=> {
    console.log(`Server is running at port ${port}`)
})
