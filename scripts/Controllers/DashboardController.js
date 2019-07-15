'use strict';

app.controller('DashboardController', DashboardController);

// Controller Function....... Takes services as params
function DashboardController($scope, userService, noteService){
    //Local Variables        
    init();

    function init(){
        //View Variables
        $scope.name = userService.username;
        $scope.total = noteService.total();
        $scope.pending = noteService.pending();
        $scope.completed = noteService.completed();
    }

    //helper functions
    function Something(){
        console.log(noteService);
    }

}