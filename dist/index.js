"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var image_1 = __importDefault(require("./image"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
var port = 8080;
app.get('/', function (req, res) {
    res.send("<h1> Welcome to main page , Please enter valid query string as the following <h1>\n    <p> http://localhost:8080/image?filename=fjord&height=100&width=100 </p>");
});
app.use('/image', image_1.default);
app.listen(8080, function () {
    console.log("Running on port ".concat(port));
});
exports.default = app;
