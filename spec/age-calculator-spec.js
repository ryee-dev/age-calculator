import { AgeCalculator } from './../src/age-calculator.js'

describe('AgeCalculator', function() {
  it('returns the inputted years', function() {
    let newAge = new AgeCalculator(24, 'Earth', 'Years', 'White');
    expect(newAge.getsAge()).toEqual('24.00');
  });

  it('converts years to seconds', function() {
    let newAge = new AgeCalculator(5, 'Earth', 'Seconds', 'Black');
    expect(newAge.getsAge()).toEqual('157680000.00');
  });

  it('returns proportional age on planet', function() {
    let newAge = new AgeCalculator(24, 'Mars', 'Years', 'Asian');
    expect(newAge.getsAge()).toEqual('45.12');
  });

  it('returns remaining time on planet', function() {
    let newAge = new AgeCalculator(48, 'Venus', 'Months', 'Native American');
    expect(newAge.timeLeft()).toEqual('201.33');
  });

  it('returns the exceeding average life expectancy in selected time frame', function() {
    let newAge = new AgeCalculator(100, 'Earth', 'Years', 'White');
    expect(newAge.timeLeft()).toEqual('20.88');
  });

  it('returns the appropriate time left for a specific race', function() {
    let newAge = new AgeCalculator(62, 'Jupiter', 'Weeks', 'Black');
    expect(newAge.timeLeft()).toEqual('8350.39');
  });
});
