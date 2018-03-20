export class AgeCalculator {
  constructor(age, planet, time, race) {
    this.age = age;
    this.planet = planet;
    this.time = time;
    this.race = race;
  }

  getsAge() {
    let current;
    let ratio;

    if ( this.planet === 'Earth' ) {
      ratio = 1;
    } else if ( this.planet === 'Mercury' ) {
      ratio = .24;
    } else if ( this.planet === 'Venus' ) {
      ratio = .62;
    } else if ( this.planet === 'Mars' ) {
      ratio = 1.88;
    } else if ( this.planet === 'Jupiter' ) {
      ratio = 11.86;
    } else {
      return "Please select a planet.";
    }

    if ( this.time === 'Years' ) {
      current = this.age * 1;
    } else if ( this.time === 'Months' ) {
      current = this.age * 12;
    } else if ( this.time === 'Weeks' ) {
      current = this.age * 52;
    } else if ( this.time === 'Days' ) {
      current = this.age * 365;
    } else if ( this.time === 'Hours' ) {
      current = this.age * 8760;
    } else if ( this.time === 'Minutes' ) {
      current = this.age * 525600;
    } else if ( this.time === 'Seconds' ) {
      current = this.age * 31536000;
    } else {
      return "Please select a time frame."
    }
      let product = current / ratio;
      return product.toFixed(2);
  }

  timeLeft() {
    let expectancy;
    let current;
    let ratio;
    let remaining;

    if ( this.planet === 'Earth' ) {
      ratio = 1;
    } else if ( this.planet === 'Mercury' ) {
      ratio = .24;
    } else if ( this.planet === 'Venus' ) {
      ratio = .62;
    } else if ( this.planet === 'Mars' ) {
      ratio = 1.88;
    } else if ( this.planet === 'Jupiter' ) {
      ratio = 11.86;
    } else {
      return "Please select a planet.";
    }

    if ( this.race === 'White' ) {
      expectancy = 79.12;
    } else if ( this.race === 'Black' ) {
      expectancy = 75.54;
    } else if ( this.race === 'Hispanic' ) {
      expectancy = 82.89;
    } else if ( this.race === 'Asian' ) {
      expectancy = 86.67;
    } else if ( this.race === 'Native American') {
      expectancy = 75.06;
    } else {
      return "Please select a race."
    }

    if ( this.time === 'Years' ) {
      current = this.age;
      remaining = expectancy;
    } else if ( this.time === 'Months' ) {
      current = this.age * 12;
      remaining = expectancy * 12;
    } else if ( this.time === 'Weeks' ) {
      current = this.age * 52;
      remaining = expectancy * 52;
    } else if ( this.time === 'Days' ) {
      current = this.age * 365;
      remaining = expectancy * 365;
    } else if ( this.time === 'Hours' ) {
      current = this.age * 8760;
      remaining = expectancy * 8760;
    } else if ( this.time === 'Minutes' ) {
      current = this.age * 525600;
      remaining = expectancy * 525600;
    } else if ( this.time === 'Seconds' ) {
      current = this.age * 31536000;
      remaining = expectancy * 31536000;
    } else {
      return "Please select a time frame."
    }

    let lifeDiff = remaining - current;
    let lifeDiff / ratio;

    if ( product < 0 ) {
      product *= -1;
    }
    return product.toFixed(2);
  }
}
