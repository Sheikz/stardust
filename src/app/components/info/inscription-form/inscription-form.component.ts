import {GuestsService} from './../../../services/guests.service';

class Controller {

    public name : string;
    public dinner: boolean = true;

    public guests : any[] = [];

    constructor(
        private Guests : GuestsService
    )
    {}

    addGuest(){
        this.guests.push({name: ''});
    }

    removeGuest(guest){
        this.guests.splice(this.guests.indexOf(guest), 1);
    }

    subscribe(){
        console.log('subscribe', {name: this.name, dinner: this.dinner, guests: this.guests});
        this.Guests.register(this.name, this.dinner, this.guests);
    }
}

export let InscriptionFormComponent : ng.IComponentOptions = {
    template: require('./inscription-form.html'),
    controller: Controller,

}