import './styles.css';
import { AgeCalculator } from './age-calculator.js';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $("#age-form").submit(function(event) {
    event.preventDefault();

    let birthdate = parseInt($("#birthdate").val());
    let planet = $("#planet-select").val();
    let time = $("#time-select").val();

    let cosmicAge = new AgeCalculator(age, planet, time);
    let result = cosmicAge.getsAge();

    $("#earthCosmicAge").text(result);
    $("#time-label").text(cosmicAge.time);
    $("#cosmic-age").text(cosmicAge.age);
    $(".show-result").show();

  });
});
