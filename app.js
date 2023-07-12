require('dotenv').config();
require('express-async-errors');
const express = require('express');
const connectDB = require('./db/connect'); // database
const notFoundMiddleware = require('./middleware/not-found'); // error handler
const errorHandlerMiddleware = require('./middleware/error-handler'); // error handler

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>File Upload Starter</h1>');
});

// middlewares
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
