import express from 'express'
import route from './image';
const app = express();
app.use(express.json())
const port = 8080

app.get('/' , (req: express.Request , res: express.Response) => {
    res.send(`<h1> Welcome to main page , Please enter valid query string as the following <h1>
    <p> http://localhost:8080/image?filename=fjord&height=100&width=100 </p>`)

})
app.use('/image' , route);


app.listen(8080 , (): void  => {
    console.log(`Running on port ${port}`);
})

export default app;