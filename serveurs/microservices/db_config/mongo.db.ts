import mongoose from 'mongoose';
require('dotenv').config()

const mongoUrl = `mongodb://${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_NAME}`;
mongoose.connect(mongoUrl);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function () {
    console.log('MongoDB connected');
});

module.exports = {mongoose};




