"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colorsMapper = (colorName) => {
    const colorsDictionary = {
        black: 30,
        red: 31,
        green: 32,
        yellow: 33,
        blue: 34,
        magneta: 35,
        cyan: 36,
        white: 37,
        gray: 38,
        'bright-red': 39,
        'bright-green': 40,
        'bright-yellow': 41,
        'bright-blue': 42,
        'bright-magneta': 43,
        'bright-blcyanue': 44,
        'bright-white': 45,
    };
    const colorsNumber = colorsDictionary[colorName];
    return colorsNumber;
};
exports.default = colorsMapper;
