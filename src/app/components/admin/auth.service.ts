export class AuthService {

    constructor(
        private $http : ng.IHttpService,
        private $window: ng.IWindowService,
        private $state : ng.ui.IStateService
    ){}
    
    login(name: string, password: string){
        this.$http.post('api/auth', {name: name, password: password});

        this.$window.sessionStorage.setItem('admin', 'true');
    }

    redirectIfNotAdmin(){
        if (!this.isAdmin()){
            console.log('not ADMIN!');
            this.$state.go('login');
        }
        else
            console.log('admin OK');
    }

    isAdmin(){
        return (this.$window.sessionStorage.getItem('admin') == 'true')
    }
}