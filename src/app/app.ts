angular.module('app',
    ['ui.router', 
    'angular.filter',
    'pascalprecht.translate',
    'ui.bootstrap',
    'ngAnimate',
    ]);

import "./services/services.module";
import "./components/shop/shop.module";
import "./components/admin/admin.module";
import "./components/info/info.module";
import "./components/banner/banner.module";
import "./components/menu/menu.module";
import "./routes/routes";
import "./config";