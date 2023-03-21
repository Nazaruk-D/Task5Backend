"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressUS11 = exports.addressUS10 = exports.addressUS9 = exports.addressUS8 = exports.addressUS7 = exports.addressUS6 = exports.addressUS5 = exports.addressUS4 = exports.addressUS3 = exports.addressUS2 = exports.addressUS1 = void 0;
const { faker } = require('@faker-js/faker');
const addressUS1 = () => {
    return `${faker.address.state()}, ${faker.address.city()}, ${faker.address.streetName()}`;
};
exports.addressUS1 = addressUS1;
const addressUS2 = () => {
    return `${faker.address.city()}, ${faker.address.streetAddress(true)}`;
};
exports.addressUS2 = addressUS2;
const addressUS3 = () => {
    return `${faker.address.city()}, ${faker.address.state()}, USA`;
};
exports.addressUS3 = addressUS3;
const addressUS4 = () => {
    return `USA, ${faker.address.city()}, ${faker.address.streetAddress(false)}`;
};
exports.addressUS4 = addressUS4;
const addressUS5 = () => {
    return `${faker.address.state()}, ${faker.address.city()}, ${faker.address.streetAddress(false)}`;
};
exports.addressUS5 = addressUS5;
const addressUS6 = () => {
    return `${faker.address.streetAddress(true)}, ${faker.address.city()}, ${faker.address.state()}`;
};
exports.addressUS6 = addressUS6;
const addressUS7 = () => {
    return `${faker.address.city()}, United States`;
};
exports.addressUS7 = addressUS7;
const addressUS8 = () => {
    return `${faker.address.city()}, ${faker.address.state()}, U.S.A.`;
};
exports.addressUS8 = addressUS8;
const addressUS9 = () => {
    return `USA, ${faker.address.state()}, ${faker.address.city()} ${faker.address.streetAddress(true)}`;
};
exports.addressUS9 = addressUS9;
const addressUS10 = () => {
    return `${faker.address.streetName()}, ${faker.address.city()}, United States of America`;
};
exports.addressUS10 = addressUS10;
const addressUS11 = () => {
    return `United States of America, ${faker.address.state()}`;
};
exports.addressUS11 = addressUS11;
