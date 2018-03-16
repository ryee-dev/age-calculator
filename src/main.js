import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AgeCalculator } from './age-calculator.js';

$(document).ready(function() {

  $("#age-form").submit(function(event){
    event.preventDefault();
    var ageInput = parseInt($("#ageInput").val());
    var userAge = new AgeCalculator(ageInput);
    var earthAge = userAge.getsAge(ageInput);

    $("#earthAge").text(earthAge);
    $(".show-result").show();
  });
});
