import express from 'express';
import dotenv from 'dotenv';

import connect from './db/connect.js';
import authRouter from './routes/auth.route.js';

const app = express();

// middleware to parse incoming requests with JSON payloads
app.use(express.json()); 

dotenv.config();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {

    res.send('Server said hello');
})

app.use('/api/auth',authRouter);

app.listen(PORT, () => {

    connect();
    console.log(`Server running on port ${PORT}.`);
})