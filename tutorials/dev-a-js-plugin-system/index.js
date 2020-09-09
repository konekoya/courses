const betaCalc = {
  currentValue: 0,

  setValue(newValue) {
    this.currentValue = newValue;
    console.log(this.currentValue);
  },

  plus(addend) {
    this.setValue(this.currentValue + addend);
  },

  minus(subtrahend) {
    this.setValue(this.currentValue - subtrahend);
  },

  register(plugin) {
    const { name, exec } = plugin;
    this[name] = exec;
  },
};

const squaredPlugin = {
  name: 'squared',
  exec: function () {
    this.setValue(this.currentValue * this.currentValue);
  },
};

// Using the calculator
console.log(betaCalc.currentValue);
betaCalc.register(squaredPlugin);
betaCalc.setValue(3); // => 3
betaCalc.plus(3); // => 6
betaCalc.minus(2); // => 4
betaCalc.squared();
betaCalc.squared();
