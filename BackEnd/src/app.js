import express from 'express';
import  cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors(
    {
    origin: process.env.CORS_ORIGIN,
    credentials:true,

}
));

// app.use(express.json({limit:'50kb'}));
app.use(express.json());
app.use(express.urlencoded({extended:true,limit:'16kb'}));
app.use(express.static('public'));
app.use(cookieParser());



import studentsRouter from './routes/students.routes.js';
import noticeRouter from './routes/notices.routes.js';
import officersRouter from './routes/officers.routes.js';
import eventsRouter from './routes/events.routes.js';


//declaration
app.use("/api/v1/officers", officersRouter);
app.use("/api/v1/students", studentsRouter);
app.use("/api/v1/notices",noticeRouter);
app.use("/api/v1/events",eventsRouter);

export {app};