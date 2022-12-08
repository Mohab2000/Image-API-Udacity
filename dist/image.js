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
    (0, validator_1.validator)(req, res);
    (0, validator_1.checkFile)(req, res);
});
exports.default = route;
//http://localhost:8080/image?filename=fjord&height=100&width=100
//http://localhost:8080/image?filename=fjord
