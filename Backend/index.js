const express = require('express');
const { connectToDb } = require('./ConnectToDb/connectToDb');
const { userRouter } = require('./Routes/userRouter');
const { notesRouter } = require('./Routes/noteRouter');
const cors = require('cors');
require('dotenv').config(); // Ensure this is at the top for environment variables to be loaded

const app = express();

// Set the port from environment variables or default to 8000
const PORT = process.env.PORT || 8000;
console.log(`Server will run on port ${PORT}`);

app.use(express.json());
app.use(cors());
app.use('/user', userRouter);
app.use('/notes', notesRouter);

app.listen(PORT, async () => {
    try {
        await connectToDb();
        console.log("Connected to DB");
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
});
