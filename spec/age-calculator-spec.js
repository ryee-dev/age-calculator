import { AgeCalculator } from './../src/age-calculator.js'

describe('AgeCalculator', function() {
  it('returns the inputted years', function() {
    let newAge = new AgeCalculator(24, 'earth', 'years');
    expect(newAge.getsAge()).toEqual(24);
  });

  it('converts years to seconds', function() {
    let newAge = new AgeCalculator(5, 'earth', 'seconds');
    expect(newAge.getsAge()).toEqual(157680000);
  });

  it('returns proportional age on planet', function() {
    let newAge = new AgeCalculator(24, 'mars', 'years');
    expect(newAge.getsAge()).toEqual(45.12);
  });

  it('returns remaining time on planet', function() {
    let newAge = new AgeCalculator(48, 'venus', 'months');
    expect(newAge.timeLeft()).toEqual(19.22);
  });

});
