"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createName = void 0;
const { faker } = require('@faker-js/faker');
const _ = require("lodash");
const createName = () => {
    const sex = ['female', 'male'];
    const randomIndex = _.random(0, sex.length - 1);
    return `${faker.name.firstName(sex[randomIndex])} ${faker.name.lastName(sex[randomIndex])}`;
};
exports.createName = createName;
