import { GuestsService } from "../../../services/guests.service";
import { IGuest } from "app";

class Controller {

    public guests : IGuest[];
    public guestNumber : number = 1;

    constructor(
        private Guests : GuestsService,
    ){}
    
    $onInit(){
        this.Guests.getGuestList()
        .then(guests => {
            console.log('guests', guests);
            this.guests = guests;
        })
    }
}

export let GuestListComponent : ng.IComponentOptions = {
    template: require('./guest-list.html'),
    controller: Controller,
}