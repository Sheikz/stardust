import { AuthService } from "../admin/auth.service";

class Controller {

    public language;
    public isNavCollapsed : boolean = true;
    public admin : boolean = false;

    constructor(
        private $translate : angular.translate.ITranslateService,
        private Auth : AuthService)
    {}

    $onInit(){
        this.language = this.$translate.use();
        this.admin = this.Auth.isAdmin();
    }

    setLanguage(lang){
        console.log('set language', lang);
        this.$translate.use(lang);
        this.language = this.$translate.use();
    }
}

export let MenuComponent : ng.IComponentOptions = {
    template: require('./menu.html'),
    controller: Controller,
    controllerAs: '$ctrl'
}