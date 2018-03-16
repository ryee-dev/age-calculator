import { AgeCalculator } from './../src/age-calculator.js'

describe('Age', function() {
  it('returns the inputted years', function() {
    var newAge = new AgeCalculator();
    var sampleAge = 24;
    newAge.getsAge(sampleAge)
    expect(newAge.getsAge(sampleAge)).toEqual(24);
  });
});
