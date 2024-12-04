const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.get('/data',(req,res)=>{
  const intro={
    name:'disha',
    age:20
  }
  res.send(intro)
})

app.post('/',(req,res)=>{
  res.send('data saved!')
})



app.listen(5050,()=>{
    console.log('server started at 3000')
})


