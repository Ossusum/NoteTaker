'use strict';

app.controller('LoginController', LoginController);

// Controller Function....... Takes services as params
function LoginController($scope,$location,userService){

    //Local Variables
    var hasAccess = false;
    init();

    function init(){
        //View Variables
        $scope.username = userService.username;
        $scope.password = userService.password;
        $scope.login = login;
    }

    //helper functions
    function login(){
        hasAccess = athenticateUser();
        if(hasAccess){
            $location.path( '/dashboard');
        }else{
            alert("Could not login!");
        }
    }
    function athenticateUser(){
        userService.username = $scope.username;
        userService.password = $scope.password;
        return userService.isUser();
    }
    
}