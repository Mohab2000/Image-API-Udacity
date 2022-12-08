import express from 'express'
import route from './image';
const app = express();
app.use(express.json())
const port = 8080
app.use('/image' , route);
app.listen(8080 , () => {
    console.log(`Running on port ${port}`);
})
