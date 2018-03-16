export class AgeCalculator {
  constructor(age, planet, time) {
    this.age = age;
    this.planet = planet;
    this.time = time;
  }

  getsAge() {
    let answer;
    let ratio;

    if ( this.planet === 'earth' ) {
      ratio = 1;
    } else if ( this.planet === 'mercury' ) {
      ratio = .24;
    } else if ( this.planet === 'venus' ) {
      ratio = .62;
    } else if ( this.planet === 'mars' ) {
      ratio = 1.88;
    } else if ( this.planet === 'jupiter' ) {
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
      return answer * ratio;
  }
}
