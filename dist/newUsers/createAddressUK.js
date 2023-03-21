"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressUK11 = exports.addressUK10 = exports.addressUK9 = exports.addressUK8 = exports.addressUK7 = exports.addressUK6 = exports.addressUK5 = exports.addressUK4 = exports.addressUK3 = exports.addressUK2 = exports.addressUK1 = void 0;
const { faker } = require('@faker-js/faker');
const randomHouseNumber_1 = require("./randomHouseNumber");
const addressUK1 = () => {
    return `Україна, ${faker.address.state()} обл.,  м. ${faker.address.city()}, вул. ${faker.address.streetName()}, д. ${(0, randomHouseNumber_1.randomHouseNumber)()}, кв. ${(0, randomHouseNumber_1.randomHouseNumber)()}`;
};
exports.addressUK1 = addressUK1;
const addressUK2 = () => {
    return `Україна, ${faker.address.state()} обл., м. ${faker.address.city()}`;
};
exports.addressUK2 = addressUK2;
const addressUK3 = () => {
    return `м. ${faker.address.city()}, вул. ${faker.address.streetName()}, д. ${(0, randomHouseNumber_1.randomHouseNumber)()}`;
};
exports.addressUK3 = addressUK3;
const addressUK4 = () => {
    return `${faker.address.state()} обл., м. ${faker.address.city()}, д. ${(0, randomHouseNumber_1.randomHouseNumber)()}`;
};
exports.addressUK4 = addressUK4;
const addressUK5 = () => {
    return `Україна, ${faker.address.state()} обл., м. ${faker.address.city()}`;
};
exports.addressUK5 = addressUK5;
const addressUK6 = () => {
    return `${faker.address.state()} обл., м. ${faker.address.city()}, вул. ${faker.address.streetName()}, д. ${(0, randomHouseNumber_1.randomHouseNumber)()}-кв. ${(0, randomHouseNumber_1.randomHouseNumber)()}`;
};
exports.addressUK6 = addressUK6;
const addressUK7 = () => {
    return `Українам., ${faker.address.state()} обл., м. ${faker.address.city()}, вул. ${faker.address.streetName()} `;
};
exports.addressUK7 = addressUK7;
const addressUK8 = () => {
    return `Україна, ${faker.address.state()} обл., м. ${faker.address.city()}`;
};
exports.addressUK8 = addressUK8;
const addressUK9 = () => {
    return `м. ${faker.address.city()}, вул. ${faker.address.streetName()}`;
};
exports.addressUK9 = addressUK9;
const addressUK10 = () => {
    return `${faker.address.state()} обл., м. ${faker.address.city()}, вул. ${faker.address.streetName()}, Україна, `;
};
exports.addressUK10 = addressUK10;
const addressUK11 = () => {
    return `м. ${faker.address.city()}, вул. ${faker.address.streetName()}, д. ${(0, randomHouseNumber_1.randomHouseNumber)()}/${(0, randomHouseNumber_1.randomHouseNumber)()}`;
};
exports.addressUK11 = addressUK11;
