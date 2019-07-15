var app = angular.module('app', ['ngRoute']);

app.config(
    function ($routeProvider){
        $routeProvider.
        when('/login',{
            templateUrl: './templates/login.html'
        }).
        when('/dashboard',{
            templateUrl: './templates/dashboard.html'
        }).
        when('/create-note',{
            templateUrl: './templates/create-note.html'
        }).
        when('/list-note',{
            templateUrl: './templates/list-notes.html'
        }).
        when('/create-note/:id',{
            templateUrl: './templates/create-note.html'
        }).
        otherwise('/login');
    })
    .run(function($rootScope, $location, userService){
        $rootScope.$on("$routeChangeStart", function() {
            if(!userService.isAuthentification) {
                $location.path("/login");
            }
        });
    });


 