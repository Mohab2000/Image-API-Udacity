import express from 'express';
import {validator, checkFile} from './validator';
const route = express.Router();

route.get('/' , (req : express.Request ,res :express.Response) : void=> {
console.log('Recieved Requeest'); 
validator(req,res);
checkFile(req , res)
})

export default route;
//http://localhost:8080/image?filename=fjord&height=100&width=100
//http://localhost:8080/image?filename=fjord