export class AgeCalculator {
  constructor(age, planet, time) {
    this.age = age;
    this.planet = planet;
    this.time = time;
  }

  getsAge() {
    let answer;
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
      answer = this.age * 1;
    } else if ( this.time === 'Months' ) {
      answer = this.age * 12;
    } else if ( this.time === 'Weeks' ) {
      answer = this.age * 52;
    } else if ( this.time === 'Days' ) {
      answer = this.age * 365;
    } else if ( this.time === 'Hours' ) {
      answer = this.age * 8760;
    } else if ( this.time === 'Minutes' ) {
      answer = this.age * 525600;
    } else if ( this.time === 'Seconds' ) {
      answer = this.age * 31536000;
    }
      let product = answer * ratio;
      return product.toFixed(2);
  }

  timeLeft() {
    const earthExpectancy = 79;
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
      answer = this.age;
      remaining = earthExpectancy;
    } else if ( this.time === 'Months' ) {
      answer = this.age * 12;
      remaining = earthExpectancy * 12;
    } else if ( this.time === 'Weeks' ) {
      answer = this.age * 52;
      remaining = earthExpectancy * 52;
    } else if ( this.time === 'Days' ) {
      answer = this.age * 365;
      remaining = earthExpectancy * 365;
    } else if ( this.time === 'Hours' ) {
      answer = this.age * 8760;
      remaining = earthExpectancy * 8760;
    } else if ( this.time === 'Minutes' ) {
      answer = this.age * 525600;
      remaining = earthExpectancy * 525600;
    } else if ( this.time === 'Seconds' ) {
      answer = this.age * 31536000;
      remaining = earthExpectancy * 31536000;
    }
    let timeLeft = remaining - answer;
    return timeLeft.toFixed(2);
  }
}
