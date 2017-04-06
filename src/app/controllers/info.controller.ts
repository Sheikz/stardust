
const RELAIS_DES_REVES = {
    lat: 50.7362271,
    lng: 4.7117962
}

class InfoController {

    public map;

    $onInit(){
      this.initMap();
    }

    private initMap(){
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: RELAIS_DES_REVES,
            zoom: 12,
        });

        let marker = new google.maps.Marker({
            position: RELAIS_DES_REVES,
            map: this.map,
            title: "Relais des Rêves"
        })
        console.log('map has been initialized!', this.map);
    }
}


angular.module('app')
    .controller('InfoController', InfoController);