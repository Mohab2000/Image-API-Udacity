import express from 'express';
import {validator, checkFile} from './validator';
const route = express.Router();

route.get('/' , (req,res)=> {
    console.log('Recieved Requeest'); 
// const filename = req.query['filename'];

const filename = req.query.filename as string;

// const height:number = parseInt(req.query.height as string)
// const width:number = parseInt(req.query.width as string)
// const oldImagePath = `${path.resolve(__dirname , `../assets/oldimages/${filename}.jpg`)}`
// const newImagePath = `${path.resolve(__dirname, `../assets/thumbImages/${fileName}-${height}x${width}.jpg`)}`;
validator(req,res);
checkFile(req , res)
//imageResized(oldImagePath , width, height, filename)
// res.sendFile(path.resolve(__dirname , `../assets/thumbImages/${filename}.jpg`))

// console.log(`file name: ${filename} , height: ${height} , width ${width} , image Path : ${oldImagePath}`)
//  console.log(req.query);
// res.send(imageToResize('/../assets/fjord.jpg', 300, 300));
 //res.send(req.params.fileName + " " + req.params.height + " " + req.params.width)
})

export default route;
//http://localhost:8080/image?filename=fjord&height=100&width=100
//http://localhost:8080/image?filename=fjord