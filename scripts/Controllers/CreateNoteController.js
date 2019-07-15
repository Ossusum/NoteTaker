'use strict';

app.controller('CreateNoteController', CreateNoteController);

// Controller Function....... Takes services as params
function CreateNoteController($scope, noteService, $routeParams) {
    var note = {};
    init();

    function init() {
        //View Variables

        if ($routeParams.id == null) {
            $scope.title = note.title;
            $scope.body = note.body;
            $scope.addNote = function () {
                note.title = $scope.title;
                note.body = $scope.body;
                note.id = noteService.notes.length
                noteService.addNote(note);
            }
        } else {
            note = noteService.notes[$routeParams.id];
            $scope.title = note.title;
            $scope.body = note.body;
            $scope.addNote = function(){
                note.title = $scope.title;
                note.body = $scope.body;
                noteService.updateNote(note);
            }
        }
    }

}