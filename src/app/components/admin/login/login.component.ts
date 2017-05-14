import { AuthService } from "../../../services/auth.service";

class Controller {

    public name : string;
    public password: string;
    public success : string;

    /* @ngInject */
    constructor(
        private Auth : AuthService
    )
    {}

    login(){
        this.Auth.login(this.name, this.password)
        .then(result => {
            this.success = result ? 'success' : 'error';
            console.log('success', this.success);
        })
    }
}

export let LoginComponent : ng.IComponentOptions = {
    template: require('./login.html'),
    controller: Controller,
    controllerAs: '$ctrl',
}