import express from 'express';
import path from 'path'
import fs from 'fs';
import imageResized from './resizeImage';
export function validator (req:express.Request , res:express.Response) {
    //console.log(`${JSON.stringify(req.query)}`);
    if(!req.query.filename || !req.query.height || !req.query.width) {
        res.send("Enter correct parameters")
      }
if(typeof req.query.filename != 'string') {
    res.status(400).json({status: 'fail' , mesesage: 'file name must be string'})
  }

//   if(typeof(req.query.width)!= 'number' || typeof(req.query.height) != 'number') {
//     res.status(400).json({status: 'fail' , mesesage: 'width and height must be number'})
//   }
  if(+(req.query.width??0) >= 1000 || +(req.query.height??0) >=1000){
  
    res.status(400).json({status: 'fail' , mesesage: 'width and height cant be more than 1000'})
  }

}
export async function  checkFile(req:express.Request , res:express.Response) {
    const imagePath = '../assets/thumbImages'
    try {
      
        if (fs.existsSync(imagePath+req.query.filename)) { 
          res.sendFile(path.resolve(__dirname , `../assets/thumbImages/${req.query.filename}.jpg`))
        }
        else {
        const oldImagePath = `${path.resolve(__dirname , `../assets/oldimages/${req.query.filename}.jpg`)}`
         await imageResized(oldImagePath  , +(req.query.width??0) , +(req.query.height??0) , `${req.query.filename}`)      
         setTimeout(() => {
          res.sendFile(path.resolve(__dirname , `../assets/thumbImages/${req.query.filename}.jpg`))
         },1000)  
        }
      } catch(err) {
        console.error(err)
      }

}





