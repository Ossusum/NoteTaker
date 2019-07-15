'use strict';

app.service('userService', UserService);

function UserService($http){
    this.username = "";
    this.password = "";
    this.isAuthentification = false;

    this.hashPassord = function hashPassord(){
        //return $window.crypto.subtle.digest('SHA-256', (this.password + salt))
        return [this.username,this.password];
    }
    this.isUser = function isUser(){
        this.isAuthentification = true;
        return this.isAuthentification;
    }
    
}

