/*global $, jQuery, alert*/
$(document).ready(function() {

    'use strict';

    // ========================================================================= //
    //  Typed Js index
    // ========================================================================= //
  
    var typed = $(".typed");
    
    $(function() {
      typed.typed({
        strings: ["Perto De Casa"],
        typeSpeed: 100,
        loop: true,
      });
    });


  });