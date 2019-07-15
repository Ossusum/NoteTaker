'use strict';

app.service('noteService', NoteService);

function NoteService($http,$location){
    let notes = [];

    this.pending = function(){
        var count = 0 
        notes.forEach(note => {
            if(!note.isCompleted){
                count += 1;
            }
        });
        return count; 
    }
    this.completed = function(){
        var count = 0 
        notes.forEach(note => {
            if(note.isCompleted){
                count += 1;
            }
        });
        return count;            
    }
    this.total = function(){
        return notes.length;
    }

    this.addNote = function(note){
        console.log(note)
        notes[notes.length] = note;
        $location.path("/list-note");
    }

    this.updateNote = function(note){
        notes[note.id] = note;
        $location.path("/list-note");
    }
    this.getNote = function(note){
        return notes[note.id];
    }
    this.notes = notes;
    
}

