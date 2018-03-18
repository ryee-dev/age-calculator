import './styles.css';
import { AgeCalculator } from './age-calculator.js';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {

  $("#begin-butt").click(function(event) {
    event.preventDefault();
    $("#start-screen").fadeOut("fast");
    $("#enter-info").fadeIn("slow");
  });

  $("#back-butt").click(function(event) {
    event.preventDefault();
    $("#start-screen").fadeIn("slow");
    $("#enter-info").fadeOut("fast");
    $(".show-results").fadeOut("fast");
  });

  $("#age-form").submit(function(event) {
    event.preventDefault();
    let age = parseInt($("#ageInput").val());
    let planet = $("#planet-select").val();
    let time = $("#time-select").val();

    let cosmicAge = new AgeCalculator(age, planet, time);
    let result = cosmicAge.getsAge();
    let countdown = cosmicAge.timeLeft();



    $("#cosmic-age").text(result);
    $(".time-left").text(countdown);
    $(".planet-label").text(cosmicAge.planet);
    $(".time-label").text(cosmicAge.time);

    $("#enter-info").fadeOut("fast");
    $(".show-results").fadeIn("slow");

    if ( age <= 79 ) {
      $("#exceeding-time").hide();
      $("#remaining-time").fadeIn("slow");
    } else {
      $("#remaining-time").hide();
      $("#exceeding-time").fadeIn("slow");
    }

  });
});
