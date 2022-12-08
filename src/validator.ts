import express from 'express';
import path from 'path'
import fs from 'fs';
import imageResized from './resizeImage';
export async function validator (req:express.Request , res:express.Response) : Promise<void> {
    //console.log(`${JSON.stringify(req.query)}`);
    // console.log(+(req.query.width??0))
if(!req.query.filename || !req.query.height || !req.query.width) {
        res.send("Enter correct parameters")
      }
if(typeof req.query.filename != 'string') {
    res.status(400).json({status: 'fail' , mesesage: 'file name must be string'})
  }

  // if(+(req.query.width??0) >= 1000 || +(req.query.height??0) >=1000){
  
  //   res.status(400).json({status: 'fail' , mesesage: 'width and height cant be more than 1000'})
  // }

  if(+(req.query.width??0) >= 1000 || +(req.query.width??0) <=0 ) {
    res.status(400).json({status: 'fail' , mesesage: 'Enter valid width number'})
  }
  if(+(req.query.height??0) >= 1000 || +(req.query.height??0) <=0 ) {
    res.status(400).json({status: 'fail' , mesesage: 'Enter valid height number'})
  }
  if(Number.isNaN(+(req.query.width ?? 0)) || Number.isNaN(+(req.query.height ?? 0))) {
    res.status(400).json({status: 'fail' , mesesage: 'width and height must be a number value'})
  }
  


}
export async function checkFile(req:express.Request , res:express.Response) : Promise<void> {
    const imagePath = '../assets/thumbImages'
    if (req.query.filename == 'fjord' || req.query.filename == "palmtunnel" || req.query.filename == "encenadaport" || req.query.filename == "icelandwaterfall" || req.query.filename == "santamonica") {  
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
    else {

      res.send("error in image name")
    }
}






