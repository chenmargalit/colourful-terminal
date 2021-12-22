"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mapColors_1 = __importDefault(require("./mapColors"));
const printColor = (colorName, itemToPrint) => {
    const colorNumber = (0, mapColors_1.default)(colorName.toLowerCase());
    return console.log(`\x1b[${colorNumber}m%s\x1b[0m`, `${itemToPrint}`);
};
exports.default = printColor;
