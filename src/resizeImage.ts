import sharp from 'sharp';
//import fs from ("fs");
const imageResized = async function (imagePath: string , imageWidth: number , imageHeight:number , imageName: string) {
   try {
    return await sharp(imagePath).resize({
           width: imageWidth,
           height: imageHeight
       }).toFormat('jpg').toFile(`./assets/thumbimages/${imageName}.jpg`)
   }
   catch (error) {
       console.log(error);
   }
   }
   export default imageResized;
   //'./assets/oldimages/fjord.jpg'