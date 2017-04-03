"use strict";
angular.module('app', ['ui.router', 'angular.filter']);
require("./services/shop.service");
require("./components/shop");
require("./controllers/shop.admin.controller");
require("./controllers/shop.controller");
require("./routes/routes");
