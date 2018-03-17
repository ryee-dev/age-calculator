import './styles.css';
import { AgeCalculator } from './age-calculator.js';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $("#age-form").submit(function(event) {
    event.preventDefault();
    let age = parseInt($("#ageInput").val());
    let planet = $("#planet-select").val();
    let time = $("#time-select").val();

    let cosmicAge = new AgeCalculator(age, planet, time);
    let result = cosmicAge.getsAge();

    $("#cosmic-age").text(result);
    $("#planet-label").text(cosmicAge.planet)
    $("#time-label").text(cosmicAge.time);
    $(".show-results").show();

  });
});
