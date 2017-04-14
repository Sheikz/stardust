import { IGuest } from "app";

export class GuestsService {

    constructor(
        private $http: ng.IHttpService
    ){

    }

    register(name: string, dinner: boolean, guests: any[]){
        return this.$http.post('api/register', {
            name: name,
            dinner: dinner,
            guests: guests
        });
    }

    getGuestList() : ng.IPromise<IGuest[]>{
        return this.$http.get('api/guests');
    }
}