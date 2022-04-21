// print the global "this"
console.log(this);

// also print the global "this"
function helloThis() {
  console.log('Inside this function, this is ' + this);
}

helloThis();

// will console log 20
var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};

child.ageTenYears();

// will log 5750
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};

investor.investment.investmentGrowth();
