const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.marinaRoute);
routes.get('/arina', lesson1Controller.arinaRoute);

module.exports = routes;