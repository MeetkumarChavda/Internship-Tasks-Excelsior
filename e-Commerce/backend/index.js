import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connection } from './config/db.js';
import adminRoutes from './routes/adminRoutes.js'

dotenv.config();

const port = process.env.PORT || 9000;
const app = express();

app.use(cors({
    origin: ['http://localhost:5173','http://localhost:5174' ], // Add your react app URL here
    // credentials: true, // This allows the browser to send cookies when making cross-origin requests.
 
}));

app.use(express.json());
app.use('/api/admin',adminRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(port, ()=>{
    connection();
    console.log(`Server is running on port ${port}`);
})