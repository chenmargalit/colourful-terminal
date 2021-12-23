"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colorsMapper = (colorName) => {
    const colorsDictionary = {
        cyan: 36,
        green: 32
    };
    const colorsNumber = colorsDictionary[colorName];
    return colorsNumber;
};
exports.default = colorsMapper;
