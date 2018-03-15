class SmartCalculator {
  constructor(initialstack) {
    // your implementation
    this.stack = Number(initialstack);
  }

  add(number) {
    // your implementation
    this.stack +="+" + number;
    return this;
  }

  subtract(number) {
    // your implementation
    this.stack += "-" + number;
    return this;
  }

  multiply(number) {
    // your implementation
    this.stack += "*" + number;
    return this;
  }

  devide(number) {
    // your implementation
    this.stack += "/" + number;
    return this;
  }

  pow(number) {
    // your implementation
    this.stack += "**" +number;
    return this;
  }

  valueOf(){ //func 4test
    return eval(this.stack);
  }
}

module.exports = SmartCalculator;
