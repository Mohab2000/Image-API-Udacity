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
app.use('/image', image_1.default);
app.listen(8080, function () {
    console.log("Running on port ".concat(port));
});
exports.default = app;
