"use strict";

// Pricefy using extend with options, optimised.
//$.fn.priceify = function(options) {
  //console.log(this);
  //this.each(function() {
  //  console.log(this);
  //   // Enable extend
    //var settings = $.extend({days: 3,vacation: this,price: $(this).data('price')},options);
  //
  //   var show = function() {
  //     var details = $('<p>Book '+settings.days+' days for $'+(settings.days * settings.price)+'</p>');
  //     $(this).hide();
  //     settings.vacation.append(details);
  //   };
  //
  //   var remove = function() {
  //     settings.vacation.hide().off('.priceify');
  //   };
  //
  //   // Call the function show
  //   settings.vacation.on('click.priceify', 'button', show);
  //   settings.vacation.on('show.priceify', show);
  //
  //   // Remove vacations disinterested in.
  //   settings.vacation.on('click.priceify', '.not-interested', remove);
//   }};
//
// };
// Named functions and name spacing. 5.2 - 5.6

// function picture() { console.log('Show Plane'); };
// function status() { console.log('In Service'); };
// function zoom() { console.log('Zoom Picture'); };

$(document).ready(function() {
  // Implementing showPrice method
  var showPrice = function() {
    var vacation = $(this).closest('.tour');
    var price = vacation.data('price');
    var details = $('<p>Book 3 days for $'+(4 * price)+'</p>');
    vacation.addClass('selected');
    vacation.append(details);
  };

  var remove = function() {
    $(this).closest('.tour').hide();
  };

  // Target specific namespace handler.
  $('.tour').on('click.price', 'button', showPrice);
  $('.tour').on('show.price', showPrice);

  // Remove item from list
  $('.not-interested').on('click.tour', remove);

  $('.show-prices').on('click', function(event) {
    event.preventDefault();
    if ( $('.tour').hasClass('selected') ) {
      // Disable button if selected class exists
      $('.tour').off('click.price');
	  } else if( !$('.tour').hasClass('selected') ) {
      // Display all unselected tours price
      $('.tour').trigger('show.price');
    };

  });

});


// $(document).ready(function(){
//
//   $('.vacation').priceify();
//
//   // $('.show-prices').on('click', function(event) {
//   //   event.preventDefault();
//   //   $(this).trigger('show.priceify');
//   // });
// });
