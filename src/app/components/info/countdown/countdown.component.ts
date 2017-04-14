import * as moment from 'moment';

const weddingMoment = moment(new Date(2017, 9, 15, 16));

class Controller {

    public days : number;
    public hours : number;
    public minutes : number;
    public seconds : number;

    private weddingMoment : moment.Moment;

    constructor(
        private $scope: ng.IScope
    ){}


    $onInit(){
        this.startCountdown();
        this.refreshCountdown();
    }

    private startCountdown(){
        setInterval(() => this.refreshCountdown(), 1000);
    }

    private refreshCountdown(){
        this.days = weddingMoment.diff(moment(), 'days');
        this.hours = weddingMoment.diff(moment(), 'hours') - this.days * 24;
        this.minutes = weddingMoment.diff(moment(), 'minutes') - this.days * 24*60 - this.hours * 60;
        this.seconds = weddingMoment.diff(moment(), 'seconds') - this.days * 24*60*60 - this.hours *60*60 - this.minutes*60;
        this.$scope.$applyAsync();
    }
}

export let CountdownComponent : ng.IComponentOptions = {
    template: require('./countdown.html'),
    controller: Controller
}