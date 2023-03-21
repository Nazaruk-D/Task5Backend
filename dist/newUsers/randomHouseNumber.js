"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomHouseNumber = void 0;
const _ = require("lodash");
const randomHouseNumber = () => _.random(1, 100);
exports.randomHouseNumber = randomHouseNumber;
