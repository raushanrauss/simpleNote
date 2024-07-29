const express = require('express');
const { connectToDb } = require('./ConnectToDb/connectToDb');
const { userRouter } = require('./Routes/userRouter');
const { notesRouter } = require('./Routes/noteRouter');
const cors = require('cors');

const app = express();
require('dotenv').config();
app.use(express.json());
app.use(cors());
app.use('/user', userRouter);
app.use('/notes',notesRouter)

app.listen(8000, async () => {
    try {
        await connectToDb();
        console.log("Connected to DB");
        console.log(`Server is running at port ${process.env.PORT || 8000}`);
    } catch (error) {
        console.error(error);
    }
});
