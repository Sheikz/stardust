import { AuthResult } from "app";

export class AuthService {

    private admin : boolean = false;

    /* @ngInject */
    constructor(
        private $http : ng.IHttpService,
        private $state : ng.ui.IStateService,
        private $rootScope : ng.IRootScopeService,
    ){
        this.verifyToken()
        .then((result : any) => {
            this.admin = (result.auth === 'OK') ? true : false;
            this.$rootScope.$emit('REFRESH_ADMIN');
        })
    }

    verifyToken(){
        let token = localStorage.getItem('token');
        return this.$http.post('api/verify', {
                token: token
        });
    }
    
    login(name: string, password: string){
        return this.$http.post('api/auth', {name: name, password: password})
        .then((result : AuthResult) => {
            if (result.success === true){
                this.admin = true;
                localStorage.setItem('token', result.token);
                return true;
            }
            this.$rootScope.$emit('REFRESH_ADMIN');
            return false;
        })
    }

    getToken() : string{
        return localStorage.getItem('token');
    }

    redirectIfNotAdmin(){
        this.verifyToken()
        .then((result :any) => {
            if (result.auth !== 'OK')
                this.$state.go('info');
        })
    }

    isAdmin(){
        return this.admin;
    }
}