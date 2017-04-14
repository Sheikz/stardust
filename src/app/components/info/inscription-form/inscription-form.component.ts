import {GuestsService} from './../../../services/guests.service';

class Controller {

    public name : string;
    public dinner: boolean = true;
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
        this.guests = [];
        this.name = '';
        this.dinner = true;
    }

    addGuest(){
        this.guests.push({name: ''});
    }

    removeGuest(guest){
        this.guests.splice(this.guests.indexOf(guest), 1);
    }

    subscribe(){
        console.log('subscribe', {name: this.name, dinner: this.dinner, guests: this.guests});
        this.Guests.register(this.name, this.dinner, this.guests)
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