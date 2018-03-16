import { AgeCalculator } from './../src/age-calculator.js'

describe('Age', function() {
  it('returns the inputted years', function() {
    var ageInput = new AgeCalculator(age);
    var sampleAge = 24;
    expect(ageInput.getsAge(sampleAge)).toEqual(24);
  });
});
