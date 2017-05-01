import { GuestsService } from './../../../services/guests.service';
import { IRegisterEntry } from "app";

class Controller {

    public register : IRegisterEntry = {};
    public success : boolean = false;

    public guests : any[] = [];

    constructor(
        private Guests : GuestsService
    )
    {}

    $onInit(){
        this.init();
    }

    private init(){
        this.register.guests = [];
        this.register.name = '';
        this.register.note = '';
    }

    addGuest(){
        this.register.guests.push({name: ''});
    }

    removeGuest(guest){
        this.register.guests.splice(this.register.guests.indexOf(guest), 1);
    }

    subscribe(){
        console.log('subscribe', this.register);
        this.Guests.register(this.register)
        .then(response => {
            this.success = true;
            this.init();
        })

    }
}

export let InscriptionFormComponent : ng.IComponentOptions = {
    template: require('./inscription-form.html'),
    controller: Controller,

}