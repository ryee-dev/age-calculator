import { AgeCalculator } from './../src/age-calculator.js'

describe('AgeCalculator', function() {
  it('returns the inputted years', function() {
    let newAge = new AgeCalculator(24, 'Earth', 'Years');
    expect(newAge.getsAge()).toEqual('24.00');
  });

  it('converts years to seconds', function() {
    let newAge = new AgeCalculator(5, 'Earth', 'Seconds');
    expect(newAge.getsAge()).toEqual('157680000.00');
  });

  it('returns proportional age on planet', function() {
    let newAge = new AgeCalculator(24, 'Mars', 'Years');
    expect(newAge.getsAge()).toEqual('45.12');
  });

  it('returns remaining time on planet', function() {
    let newAge = new AgeCalculator(48, 'Venus', 'Months');
    expect(newAge.timeLeft()).toEqual('230.64');
  });

  it('returns the exceeding average life expectancy in selected time frame', function() {
    let newAge = new AgeCalculator(100, 'Earth', 'Years');
    expect(newAge.timeLeft()).toEqual('21.00');
  });
});
