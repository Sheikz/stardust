import { AuthService } from "../auth.service";

class Controller {

    public name : string;
    public password: string;

    constructor(
        private Auth : AuthService
    )
    {}

    login(){
        this.Auth.login(this.name, this.password);
    }
}

export let LoginComponent : ng.IComponentOptions = {
    template: require('./login.html'),
    controller: Controller,
    controllerAs: '$ctrl',
}