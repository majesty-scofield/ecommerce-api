import express from 'express';
import dotenv from 'dotenv';
import router from "./routes";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Node API Version 1.0.0');
});

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});