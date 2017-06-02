import { GuestsService } from "../../../services/guests.service";
import { IGuest } from "app";
import { AuthService } from "../../../services/auth.service";

class Controller {

    public guests : IGuest[];
    public guestNumber : number = 1;

    /* @ngInject */
    constructor(
        private Guests : GuestsService,
        private Auth : AuthService,
    ){}
    
    $onInit(){
        this.Auth.redirectIfNotAdmin();
        
        this.reload();
    }

    private reload(){
        this.Guests.getGuestList()
        .then(guests => {
            this.guests = guests;
        })
    }

    removeGuest(guest){
        this.Guests.removeGuest(guest)
        .then(() => this.reload());
    }
}

export let GuestListComponent : ng.IComponentOptions = {
    template: require('./guest-list.html'),
    controller: Controller,
}