import express from 'express'
import 'dotenv/config'
import { connectDB } from './config/db';
import authRouter from './routes/auth.route';
import blogRouter from './routes/blog.route';

const app = express();
app.use(express.json());

// DB
connectDB();

// Middlewares
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/blog', blogRouter)


const PORT = process.env.PORT|| 5000
app.listen(PORT, () => {
    console.log('Server is running at port: ' + PORT)
})
