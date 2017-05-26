class Controller {

    /* @ngInject */
    constructor(
        private $templateCache
    ){

    }

    $onInit(){
    }

    public slides = [
        "http://i.imgur.com/McvKois.jpg",
        "http://i.imgur.com/1OPWatI.jpg",
    ];

    public myInterval = 5000;
    public noWrapSlides = false;
    public active = 0;

}

export const IntroPictures : ng.IComponentOptions = {
    template: require('./intro-pictures.html'),
    controller: Controller
}