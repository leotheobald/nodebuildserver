(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
    var details = $('<p>Book 3 days for $'+(3 * price)+'</p>');
    vacation.addClass('selected');
    vacation.append(details);
  };

  var remove = function() {
    $(this).closest('.tour').hide();
  };

  // target specific namespace handler.
  $('.tour').on('click.price', 'button', showPrice);
  $('.tour').on('show.price', showPrice);

  $('.show-prices').on('click', function(event) {
    event.preventDefault();
    if ( $('.tour').hasClass('selected') ) {
		  // disable .tour.selected button
      $('.tour').off('click.price');
	  } else if( !$('.tour').hasClass('selected') ) {
      $('.tour').trigger('show.price');
    };

  });

  // Remove item from list
  $('.not-interested').on('click.tour', remove);
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

},{}]},{},[1]);
