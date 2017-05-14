import { AuthService } from "../../services/auth.service";

class Controller {

    public language;
    public isNavCollapsed : boolean = true;
    public admin : boolean = false;
    public currentState : string;

    /* @ngInject */
    constructor(
        private $translate : angular.translate.ITranslateService,
        private Auth : AuthService,
        private $location : ng.ILocationService,
        private $scope : ng.IScope,
        private $state : ng.ui.IStateService,
        private $rootScope : ng.IRootScopeService)
    {}

    $onInit(){
        this.language = this.$translate.use();
        this.checkAdmin();
        this.computeSubState();
        this.$scope.$watch(() => this.$location.url(), () => {
            this.computeSubState();
        });
        this.$rootScope.$on('REFRESH_ADMIN', () => this.checkAdmin());
    }

    private checkAdmin(){
        this.admin = this.Auth.isAdmin();
    }

    setLanguage(lang){
        this.$translate.use(lang);
        this.language = this.$translate.use();
    }

    computeSubState(){
        this.currentState = this.$state.current.name;
        if (this.$location.hash() == 'registerForm')
            this.currentState = "register"
        else if (this.$location.path() === '/info')
            this.currentState = 'info';
    }

}

export let MenuComponent : ng.IComponentOptions = {
    template: require('./menu.html'),
    controller: Controller,
    controllerAs: '$ctrl'
}