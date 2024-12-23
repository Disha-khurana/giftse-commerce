const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./Routes/ProductRoute');
const categoryRoutes = require('./Routes/CategoryRoute');
const slideRoutes = require('./Routes/SlideRoute');
const offerSlideRoutes = require('./Routes/offerSlideRoute')
const ImagesRoute = require('./Routes/ImagesRoute')
const GlobalRoute = require('./Routes/GlobalRoute');
const UserRoute = require('./Routes/User');

 require('./dbconfig/db'); 

const app = express();
app.use(cors());

app.use(bodyParser.json())

  

app.use('/products', productRoutes);                    //(/route)
app.use('/category', categoryRoutes);                    //(/category/route)
app.use('/slide',slideRoutes);
app.use('/offerSlide',offerSlideRoutes);
app.use('/images',ImagesRoute);
app.use('/global',GlobalRoute);
app.use('/',UserRoute);



app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});
