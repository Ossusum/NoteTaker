'use strict';

app.controller('ListNoteController', ListNoteController);

// Controller Function....... Takes services as params
function ListNoteController($scope, $location, noteService){

    init();

    function init(){
        $scope.notes = noteService.notes;
        console.log($scope.notes)
    }

    this.updateNote = function(note){
        this.note.isCompleted = !this.note.isCompleted;
    }

    this.editNote = function(note){
        $location.path( '/create-note/' + note.id);
    }
    

}