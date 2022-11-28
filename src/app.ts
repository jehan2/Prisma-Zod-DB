import express from 'express';
import 'dotenv/config';
import userRouter from './routes/user.route'
import bookRouter from './routes/books.route';
import { connectDB } from './config/db';
import 'dotenv/config';
import loanRouter from './routes/loen.route';


const app = express();

connectDB();

app.use(express.json());

app.use('/api/v1/users', userRouter );
app.use('/api/v1/book',bookRouter );
app.use('/api/v1/loen',loanRouter)

const PORT =5000;
app.listen(PORT, ()=>{
     console.log(`server listeng on port ${PORT}`)
});