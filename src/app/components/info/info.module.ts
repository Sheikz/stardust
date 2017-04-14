import {InfoController} from './info.controller';
import { InscriptionFormComponent } from './inscription-form/inscription-form.component';
import { CountdownComponent } from "./countdown/countdown.component";

angular.module('app')
    .component('inscriptionForm', InscriptionFormComponent)
    .controller('InfoController', InfoController)
    .component('countdown', CountdownComponent);