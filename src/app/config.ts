import {frenchTranslations} from './translations/translations.fr';
import {englishTranslations} from './translations/translations.en';
/* @ngInject */
function MyHttpInterceptor($q : ng.IQService, $location : ng.ILocationService, $window : ng.IWindowService) {
    return {
        'response': onResponse,
    };

    function onResponse(response) {
        if (response.config.url.match(/\.html$/))
            return response;
        else
            return response.data;
    }
}

/* @ngInject */
function HttpConfig($httpProvider:ng.IHttpProvider) {
    $httpProvider.interceptors.push('MyHttpInterceptor');
}

/* @ngInject */
function translationsLoader($translateProvider : angular.translate.ITranslateProvider){
    $translateProvider.translations('en', englishTranslations)
    $translateProvider.translations('fr', frenchTranslations)
    $translateProvider.useSanitizeValueStrategy('escapeParameters');
    $translateProvider.preferredLanguage('en');
}

angular.module('app')
    .config(HttpConfig)
    .factory('MyHttpInterceptor', MyHttpInterceptor)
    .config(translationsLoader)