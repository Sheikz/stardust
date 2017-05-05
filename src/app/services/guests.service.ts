import { IGuest, IRegisterEntry } from "app";

export class GuestsService {

    /* @ngInject */
    constructor(
        private $http: ng.IHttpService
    ){

    }

    register(register : IRegisterEntry){
        return this.$http.post('api/register', register);
    }

    getGuestList() : ng.IPromise<IGuest[]>{
        return this.$http.get('api/guests');
    }
}