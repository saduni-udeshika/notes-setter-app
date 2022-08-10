const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware'); //import the custom express error handler middleware
const connectDB = require('./config/db');

const port = process.env.PORT || 5000;

connectDB();

const app = express();

// To access req.body data we need to handle this using a middleware as below
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/notes', require('./routes/noteRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Serve frontend - Deployment process to Heroku
if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, '../frontend/build')));

   app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')));
} else {
   app.get('/', (req, res) => res.send('Please set to production'));
}

// Overwrite the default Express error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
