"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var validator_1 = require("./validator");
var route = express_1.default.Router();
route.get('/', function (req, res) {
    console.log('Recieved Requeest');
    // const filename = req.query['filename'];
    // const filename = req.query.filename as string;
    // const height:number = parseInt(req.query.height as string)
    // const width:number = parseInt(req.query.width as string)
    // const oldImagePath = `${path.resolve(__dirname , `../assets/oldimages/${filename}.jpg`)}`
    // const newImagePath = `${path.resolve(__dirname, `../assets/thumbImages/${fileName}-${height}x${width}.jpg`)}`;
    (0, validator_1.validator)(req, res);
    (0, validator_1.checkFile)(req, res);
    //imageResized(oldImagePath , width, height, filename)
    // res.sendFile(path.resolve(__dirname , `../assets/thumbImages/${filename}.jpg`))
    // console.log(`file name: ${filename} , height: ${height} , width ${width} , image Path : ${oldImagePath}`)
    //  console.log(req.query);
    // res.send(imageToResize('/../assets/fjord.jpg', 300, 300));
    //res.send(req.params.fileName + " " + req.params.height + " " + req.params.width)
});
exports.default = route;
//http://localhost:8080/image?filename=fjord&height=100&width=100
//http://localhost:8080/image?filename=fjord
