const express = require('express')
const app = express()
const port = 5000;
const cors = require('cors')
app.use(cors())

const allData = require('./data/data.json')

app.get('/',(req, res)=>{
    res.send(allData)
})

app.get('/recipies/:id', (req,res)=>{
    const id = req.params.id
    const singleData = allData.find(n=>n.id== id)
    res.send(singleData)
})




app.listen(port)