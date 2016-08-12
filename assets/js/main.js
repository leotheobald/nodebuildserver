"use strict";

// function MyName() {
//
//   this.name function() {
//     console.log('name clicked');
//     return false;
//   };
//
//   $('p').on('click', 'a', this.name);
//
// };


$(document).ready(function(){

  $('p').on('click', 'a', function(event){

    event.preventDefault();
    $('#container').slideToggle();

  });



  // var newname = MyName();
  //
  // newname(this.name);
});
