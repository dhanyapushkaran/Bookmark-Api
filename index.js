const express = require('express')
const cors= require('cors')
const dataservice = require('./services/data')
const app = express()

app.use(cors({
    origin: 'http://localhost:4200',
    credentials:true
}))

app.use(express.json())

app.post('/create', (req, res) => {
    console.log("req.body", req.body)
    dataservice.createBookmark(req.body)
        .then(result => { 
            res.status(result.statusCode).json(result) 
        })
    
})

app.get('/list', (req, res) => {
   dataservice.listBookmark()
   .then(result=>{
    res.status(result.statusCode).json(result)
   })
})

app.listen(3000, () => {
    console.log("server stared at port:3000")
})