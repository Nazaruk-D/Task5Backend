"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUsers = void 0;
const { faker } = require('@faker-js/faker');
const createRandomUser_1 = require("./createRandomUser");
const _ = require("lodash");
const generateUsers = (language, amount, seed, page) => {
    faker.locale = language;
    if (seed && !amount) {
        faker.seed(seed + page - 1);
        const firstUsersBlock = new Array(10).fill(0).map(() => (0, createRandomUser_1.createRandomUser)(language));
        faker.seed(seed + page);
        const secondUsersBlock = new Array(10).fill(0).map(() => (0, createRandomUser_1.createRandomUser)(language));
        return [...firstUsersBlock, ...secondUsersBlock];
    }
    if (seed) {
        faker.seed(seed + page);
    }
    return new Array(amount || 10).fill(0).map(() => (0, createRandomUser_1.createRandomUser)(language));
};
exports.generateUsers = generateUsers;
