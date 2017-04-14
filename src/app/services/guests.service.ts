export class GuestsService{

    constructor(
        private $http: ng.IHttpService
    ){

    }

    register(name: string, dinner: boolean, guests: any[]){
        this.$http.post('api/register', {
            name: name,
            dinner: dinner,
            guests: guests
        });
    }
}