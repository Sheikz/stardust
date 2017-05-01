import {InfoController} from './info.controller';
import { InscriptionFormComponent } from './inscription-form/inscription-form.component';
import { CountdownComponent, toFixedDigit } from "./countdown/countdown.component";
import { IntroComponent } from "./intro/intro.component";
import { LocationComponent } from "./location/location.component";
import { HoneymoonComponent } from "./honeymoon/honeymoon.component";

angular.module('app')
    .component('inscriptionForm', InscriptionFormComponent)
    .controller('InfoController', InfoController)
    .component('countdown', CountdownComponent)
    .component('intro', IntroComponent)
    .component('location', LocationComponent)
    .component('honeymoon', HoneymoonComponent)
    .filter('toFixedDigit', toFixedDigit);