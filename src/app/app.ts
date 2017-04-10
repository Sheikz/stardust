angular.module('app', 
['ui.router', 'angular.filter']);

import "./services/shop.service";
import "./components/shop/shop.module";
import "./components/admin/shop.admin.controller";
import "./components/info/info.controller";
import "./routes/routes";