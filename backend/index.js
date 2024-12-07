const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./Routes/ProductRoute');
const categoryRoutes = require('./Routes/CategoryRoute');
const slideRoutes = require('./Routes/SlideRoute')
 require('./dbconfig/db'); 

const app = express();

// Middleware
app.use(bodyParser.json())



app.use('/', productRoutes);                    //(/route)
app.use('/', categoryRoutes);                    //(/category/route)
app.use('/',slideRoutes)

app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});
