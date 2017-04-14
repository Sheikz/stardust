import {InfoController} from './info.controller';
import {InscriptionFormComponent} from './inscription-form/inscription-form.component';

angular.module('app')
    .component('inscriptionForm', InscriptionFormComponent)
    .controller('InfoController', InfoController)