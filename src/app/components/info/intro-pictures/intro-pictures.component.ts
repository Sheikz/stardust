class Controller {

    /* @ngInject */
    constructor(
        private $templateCache
    ){

    }

    $onInit(){
    }

    public slides = [
        "https://i.imgur.com/YcAADgV.jpg",
        "https://i.imgur.com/McvKois.jpg",
        "https://i.imgur.com/wVOUbea.jpg",
    ];

    public myInterval = 5000;
    public noWrapSlides = false;
    public active = 0;

}

export const IntroPictures : ng.IComponentOptions = {
    template: require('./intro-pictures.html'),
    controller: Controller
}