const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./Routes/ProductRoute');
const categoryRoutes = require('./Routes/CategoryRoute');
 require('./dbconfig/db'); 

const app = express();

// Middleware
app.use(bodyParser.json());
// connectDB();


// Use the product routes
app.use('/product', productRoutes);                    //(/product/route)
app.use('/category', categoryRoutes);                    //(/category/route)

// Start the server
app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});
