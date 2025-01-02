import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connection } from './DB/connectDB.js';
import router from './route/routes.js';
import session from 'express-session';


dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'], // Add your react app URL here
    credentials: true, // This allows the browser to send cookies when making cross-origin requests.
 
}));

app.use(
    session({
        secret: "secret-key",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(express.urlencoded({ extended: true }));
app.use('/api',router);

app.listen(port , async ()=>{
    await connection();
    console.log(`Server is running on port ${port}`)
})



