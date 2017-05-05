
class Controller {

    public days : number;
    public hours : number;
    public minutes : number;
    public seconds : number;

    private secondsToWedding : number;

    /* @ngInject */
    constructor(
        private $scope: ng.IScope
    ){}


    $onInit(){
        this.startCountdown();
        this.refreshCountdown();
    }

    private startCountdown(){
        let wDate = new Date(2017, 7, 25, 16).getTime();
        let now = Date.now()
        this.secondsToWedding = Math.floor((wDate - now)/1000);
        setInterval(() => this.refreshCountdown(), 1000);
    }

    private refreshCountdown(){
        this.secondsToWedding--;
        this.seconds = this.secondsToWedding;
        this.minutes = Math.floor(this.secondsToWedding / 60) % 60;
        this.hours = Math.floor(this.secondsToWedding / 60 / 60) % 24;
        this.days = Math.floor(this.secondsToWedding / 60 / 60 / 24);
        this.$scope.$applyAsync();
    }
}

export function toFixedDigit() {
    return (input) => ('0' + input).slice(-2);
}

export let CountdownComponent : ng.IComponentOptions = {
    template: require('./countdown.html'),
    controller: Controller
}