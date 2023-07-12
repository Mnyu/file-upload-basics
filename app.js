require('dotenv').config();
require('express-async-errors');
const express = require('express');
const connectDB = require('./db/connect'); // database
const notFoundMiddleware = require('./middleware/not-found'); // error handler
const errorHandlerMiddleware = require('./middleware/error-handler'); // error handler
const productRouter = require('./routes/productRoutes'); // product router
const fileUpload = require('express-fileupload');

const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.static('./public'));
app.use(express.json());
app.use(fileUpload());
app.use('/api/v1/products', productRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
