import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan("common"));
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
import userRoutes from './routes/users.js';

app.use('/api/users',userRoutes);

const PORT = process.env.PORT || 6001;


app.listen(PORT,() => console.log(`Server Port: ${PORT}`))