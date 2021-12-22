"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mapColors_1 = __importDefault(require("./mapColors"));
const printColor = (colorName, itemToConsole) => {
    const colorNumber = (0, mapColors_1.default)(colorName.toLowerCase());
    return console.log(`\x1b[${colorNumber}`, itemToConsole, '\x1b[0m');
};
exports.default = printColor;
