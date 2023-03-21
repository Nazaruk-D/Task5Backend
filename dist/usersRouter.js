"use strict";
const RouterUsers = require('express');
const usersController = require('./usersController');
const usersRouter = new RouterUsers();
const usersEndPoints = {
    users: '/',
};
usersRouter.post(usersEndPoints.users, usersController.fetchUsers);
module.exports = usersRouter;
