const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello rahul rasjefj,asjfbaj ');
})

const mongoURI ="mongodb+srv://palrahul95987:VBgVr0z3f6DhDLUJ@cluster0.gtgic0q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then( ()=>
    console.log('conection sucessfully'))

.catch((err)=>console.log(" mongoDB connection Error",err));

app.get("/",(req,res)=>{
    res.send("Server is live");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})