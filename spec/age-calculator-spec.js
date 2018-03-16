import { AgeCalculator } from './../src/age-calculator.js'

describe('AgeCalculator', function() {
  it('returns the inputted years', function() {
    var newAge = new AgeCalculator(24);
    expect(newAge.getsAge()).toEqual(24);
  });
});
